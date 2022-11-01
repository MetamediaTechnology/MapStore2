/*
* update SLD geostyler-sld-parser not support AnchorPoint
*/

import xml2js from 'xml2js';

/**
 * Check TextSymbolizer has AnchorPoint
 * @param  {object} symbolizer
 * @param  {number} index of rules
 * @param  {object} style
 * @return  {object} newStyle without unused properties
 */

function checkSymbolizer(symbolizer, index, style) {
    if (symbolizer.hasOwnProperty('TextSymbolizer')) {
        if (symbolizer.TextSymbolizer.LabelPlacement.PointPlacement.hasOwnProperty('AnchorPoint')) {
            let anchorPointX = parseFloat(symbolizer.TextSymbolizer.LabelPlacement.PointPlacement.AnchorPoint.AnchorPointX ?? 0.5);
            let anchorPointY = parseFloat(symbolizer.TextSymbolizer.LabelPlacement.PointPlacement.AnchorPoint.AnchorPointY ?? 0.5);

            let anchorXText;
            if (anchorPointX > 0 && anchorPointX <= 0.5) {
                anchorXText = 'center';
            } else if (anchorPointX === 0) {
                anchorXText = 'right';
            } else if (anchorPointX > 0.5 && anchorPointX === 1) {
                anchorXText = 'left';
            }

            let anchorYText;
            if (anchorPointY > 0 && anchorPointY <= 0.5) {
                anchorYText = 'middle';
            } else if (anchorPointY === 0) {
                anchorYText = 'top';
            } else if (anchorPointY > 0.5 && anchorPointY === 1) {
                anchorYText = 'bottom';
            }

            style.rules[index].symbolizers[0].anchor = anchorXText;
            style.rules[index].symbolizers[0].anchorPointX = anchorPointX;
            style.rules[index].symbolizers[0].anchorPointY = anchorPointY;
            style.rules[index].symbolizers[0].anchorPoint = [anchorPointX, anchorPointY];
            style.rules[index].symbolizers[0].anchorXText = anchorXText;
            style.rules[index].symbolizers[0].anchorYText = anchorYText;
        }
    }
    return style;
}

/**
 * updateAnchorPointStyleToJson bcoz geostyler-sld-parser not support AnchorPoint
 * parse SLD xml and compare styles for update
 * @param  {object} style without AnchorPoint
 * @param  {string} sldXmlCode with properties name and rules
 * @return {object} newStyle with AnchorPoint
 */

export const updateAnchorPointStyleToJson = (style, sldXmlCode) => {
    let newStyle = style;
    let sldXmlCodeNew = sldXmlCode.replaceAll('sld:', '');
    xml2js.parseString(sldXmlCodeNew, {explicitArray: false}, (_, result) => {
        const rules = result.StyledLayerDescriptor.NamedLayer.UserStyle.FeatureTypeStyle.Rule;
        if (Array.isArray(rules)) {
            rules.forEach((value, index) => {
                // compare symbolizer in rule with style
                newStyle = checkSymbolizer(value, index, newStyle);
            });
        } else {
            newStyle = checkSymbolizer(rules, 0, newStyle);
        }
    });
    return newStyle;
};

/**
 * updateAnchorPointBeforeBuildXml bcoz geostyler-sld-parser not support AnchorPoint
 * compare styles for update
 * @param  {object} styleFromCode from xml2js parsed SLD string
 * @param  {array} styleFromVisual from visual styler props
 * @return {object} styleFromCode with AnchorPoint
 */

export const updateAnchorPointBeforeBuildXml = (styleFromCode, styleFromVisual) => {
    const rules = styleFromCode.StyledLayerDescriptor.NamedLayer.UserStyle.FeatureTypeStyle.Rule;

    styleFromVisual.forEach((value, index) => {
        const symbolizers = value.symbolizers[0];
        if (symbolizers.hasOwnProperty('anchor')) {
            const anchorText = symbolizers.anchor;
            let anchorPointX = 0.5;
            let anchorPointY = symbolizers.anchorPointY ?? 0.5; // fix middle = 0.5 | top = 0 | bottom = 1
            if (anchorText === 'left') {
                anchorPointX = 1;
            } else if (anchorText === 'center') {
                anchorPointX = 0.5;
            } else if (anchorText === 'right') {
                anchorPointX = 0;
            }
            if (Array.isArray(rules)) {
                rules[index].TextSymbolizer.LabelPlacement.PointPlacement.AnchorPoint = {AnchorPointX: anchorPointX, AnchorPointY: anchorPointY};
            } else {
                rules.TextSymbolizer.LabelPlacement.PointPlacement.AnchorPoint = {AnchorPointX: anchorPointX, AnchorPointY: anchorPointY};
            }
        }
    });

    return styleFromCode;
};

export default {
    updateAnchorPointStyleToJson,
    updateAnchorPointBeforeBuildXml
};
