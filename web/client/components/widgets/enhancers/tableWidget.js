/*
 * Copyright 2018, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { get } from 'lodash';
import { compose, withPropsOnChange } from 'recompose';
import debounce from 'lodash/debounce';
import deleteWidget from './deleteWidget';
import { defaultIcons, editableWidget, withHeaderTools } from './tools';
import axios from "../../../libs/ajax"; 
import CoordinatesUtils from "../../../utils/CoordinatesUtils";

const withSorting = () => withPropsOnChange(["gridEvents"], ({ gridEvents = {}, updateProperty = () => { } } = {}) => ({
    gridEvents: {
        ...gridEvents,
        onGridSort: (sortBy, sortOrder) => updateProperty("sortOptions", { sortBy, sortOrder })
    }
}));

const withSelected = () => withPropsOnChange(["gridEvents"], ({gridEvents = {}, updateWidgetMap = () => {} }) => ({ 
    gridEvents: { 
        ...gridEvents, 
        onGridSelect: (dataObj) => { 
            const DEFAULT_API = '/geoserver/wfs';
            axios.get( DEFAULT_API, { 
                params: { 
                    service: 'WFS', 
                    version: '2.0.0', 
                    request: 'GetFeature', 
                    typeName: `${dataObj.typeName}`, 
                    outputFormat: 'application/json', 
                    featureID: dataObj.featureId 
                } 
            }).then((response) => {
                let featureSelect = response.data.features; 
                let crs4326 = "EPSG:4326"; 
                let projectedFeature = CoordinatesUtils.reprojectGeoJson(response.data, crs4326, crs4326); 
                let getGeoJsonex = CoordinatesUtils.getGeoJSONExtent(projectedFeature); 
 
                if (response.data.totalFeatures > 0 && (response.data.features).length > 0) { 
                    let createBBox = CoordinatesUtils.createBBox(getGeoJsonex[0], getGeoJsonex[1], getGeoJsonex[2], getGeoJsonex[3]); 
                    const extent = [createBBox.minx, createBBox.miny, createBBox.maxx, createBBox.maxy]; 
                    const center = [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2]; 
 
                    return updateWidgetMap("map", { center: { x: center[0], y: center[1], crs: crs4326 }, bbox: { bounds: createBBox, crs: crs4326 }}, featureSelect); 
                } 
                return null; 
            }); 
        } 
    } 
}));

/**
 * enhancer that updates widget column size on resize. and add base icons and menus
 * Moreover enhances it to allow delete.
*/
export default compose(
    withPropsOnChange(["gridEvents"], ({ gridEvents = {}, updateProperty = () => {} } = {}) => {
        const _debounceOnAddFilter = debounce((...args) => updateProperty(...args), 500);
        return {
            gridEvents: {
                ...gridEvents,
                onAddFilter: (widgetFilter) => _debounceOnAddFilter(`quickFilters.${widgetFilter.attribute}`, widgetFilter),
                onColumnResize:
                (colIdx, width, rg, d, a, columns) =>
                    updateProperty(`options.columnSettings["${get(columns.filter(c => !c.hide)[colIdx], "name")}"].width`, width)
            }
        };
    }),
    deleteWidget,
    editableWidget(),
    defaultIcons(),
    withHeaderTools(),
    withSorting(),
    withSelected()
);
