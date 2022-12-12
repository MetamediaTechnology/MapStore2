/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const wellKnownName = [
    {
        value: 'Circle',
        label: 'styleeditor.circle',
        preview: {
            type: 'point',
            paths: [{
                d: 'M 160,100 A 60,60 0 0 1 100,160 60,60 0 0 1 40,100 60,60 0 0 1 100,40 60,60 0 0 1 160,100 Z',
                stroke: '#f2f2f2',
                fill: "#333333",
                strokeWidth: 4
            }]
        }
    },
    {
        value: 'Square',
        label: 'styleeditor.square',
        preview: {
            type: 'point',
            paths: [{
                d: 'M40 40 L160 40 L160 160 L40 160Z',
                stroke: '#f2f2f2',
                fill: "#333333",
                strokeWidth: 4
            }]
        }
    },
    {
        value: 'Triangle',
        label: 'styleeditor.triangle',
        preview: {
            type: 'point',
            paths: [{
                d: 'M 160,151.96151 H 40 L 99.999999,48.038488 Z',
                stroke: '#f2f2f2',
                fill: "#333333",
                strokeWidth: 4
            }]
        }
    },
    {
        value: 'Star',
        label: 'styleeditor.star',
        preview: {
            type: 'point',
            paths: [{
                d: 'M 165.07677,84.40286 131.87672,116.49613 139.49277,162.03972 98.710865,140.38195 57.749838,161.699 65.745291,116.22048 32.813927,83.851564 78.537289,77.40206 99.145626,36.079922 119.40876,77.572419 Z',
                stroke: '#f2f2f2',
                fill: "#333333",
                strokeWidth: 4
            }]
        }
    },
    {
        value: 'Cross',
        label: 'styleeditor.cross',
        preview: {
            type: 'point',
            paths: [{
                d: 'M 84.99987,39.999998 V 84.999868 H 39.999999 V 115.00013 H 84.99987 V 160 H 115.00013 V 115.00013 H 160 V 84.999868 H 115.00013 V 39.999998 Z',
                stroke: '#f2f2f2',
                fill: "#333333",
                strokeWidth: 4
            }]
        }
    },
    {
        value: 'X',
        label: 'styleeditor.x',
        preview: {
            type: 'point',
            paths: [{
                d: 'M 131.81971,46.966899 100,78.786612 68.180288,46.966898 46.966899,68.180287 78.786613,100 46.9669,131.81971 68.180287,153.0331 100,121.21339 131.81971,153.0331 153.0331,131.81971 121.21339,99.999999 153.0331,68.180286 Z',
                stroke: '#f2f2f2',
                fill: "#333333",
                strokeWidth: 4
            }]
        }
    },
    {
        value: 'shape://vertline',
        label: 'styleeditor.verticalLine',
        preview: {
            type: 'point',
            paths: [{
                d: 'M 100,40 V 160 Z',
                stroke: '#333333',
                strokeWidth: 4,
                fill: 'none'
            }]
        }
    },
    {
        value: 'shape://horline',
        label: 'styleeditor.horizontalLine',
        preview: {
            type: 'point',
            paths: [{
                d: 'M 160,100 40.000002,100 Z',
                stroke: '#333333',
                strokeWidth: 4,
                fill: 'none'
            }]
        }
    },
    {
        value: 'shape://slash',
        label: 'styleeditor.slash',
        preview: {
            type: 'point',
            paths: [{
                d: 'M 142.42641,57.573591 57.573595,142.4264 Z',
                stroke: '#333333',
                strokeWidth: 4,
                fill: 'none'
            }]
        }
    },
    {
        value: 'shape://backslash',
        label: 'styleeditor.backslash',
        preview: {
            type: 'point',
            paths: [{
                d: 'M 142.42641,142.42641 57.573595,57.573594 Z',
                stroke: '#333333',
                strokeWidth: 4,
                fill: 'none'
            }]
        }
    },
    {
        value: 'shape://dot',
        label: 'styleeditor.dot',
        preview: {
            type: 'point',
            paths: [{
                d: 'M 95,100 105,100 Z',
                stroke: '#333333',
                strokeWidth: 10,
                fill: 'none'
            }]
        }
    },
    {
        value: 'shape://plus',
        label: 'styleeditor.plus',
        preview: {
            type: 'point',
            paths: [{
                d: 'M 100,40 V 160 Z',
                stroke: '#333333',
                strokeWidth: 4,
                fill: 'none'
            }, {
                d: 'M 160,100 40.000002,100 Z',
                stroke: '#333333',
                strokeWidth: 4,
                fill: 'none'
            }]
        }
    },
    {
        value: 'shape://times',
        label: 'styleeditor.times',
        preview: {
            type: 'point',
            paths: [{
                d: 'M 142.42641,57.573591 57.573595,142.4264 Z',
                stroke: '#333333',
                strokeWidth: 4,
                fill: 'none'
            }, {
                d: 'M 142.42641,142.42641 57.573595,57.573594 Z',
                stroke: '#333333',
                strokeWidth: 4,
                fill: 'none'
            }]
        }
    },
    {
        value: 'shape://oarrow',
        label: 'styleeditor.openArrow',
        preview: {
            type: 'point',
            paths: [{
                d: 'M 40.027335,53.266123 159.77305,100 40.027335,146.73388',
                stroke: '#333333',
                strokeWidth: 4,
                fill: 'none'
            }]
        }
    },
    {
        value: 'shape://carrow',
        label: 'styleeditor.closedArrow',
        preview: {
            type: 'point',
            paths: [{
                d: 'M 40.027335,53.266123 159.77305,100 40.027335,146.73388Z',
                stroke: '#333333',
                strokeWidth: 4,
                fill: 'none'
            }]
        }
    },
    {
        value: 'ttf://Webdings#0x21',
        label: 'spider',
        preview: {
            type: 'point',
            texts: [{
                text: '!',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0x22',
        label: 'web',
        preview: {
            type: 'point',
            texts: [{
                text: '"',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0x25',
        label: 'trophy',
        preview: {
            type: 'point',
            texts: [{
                text: '%',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0x26',
        label: 'award',
        preview: {
            type: 'point',
            texts: [{
                text: '&',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0x40',
        label: 'tools',
        preview: {
            type: 'point',
            texts: [{
                text: '@',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0x41',
        label: 'underconstruction',
        preview: {
            type: 'point',
            texts: [{
                text: 'A',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0x42',
        label: 'town',
        preview: {
            type: 'point',
            texts: [{
                text: 'B',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0x43',
        label: 'city',
        preview: {
            type: 'point',
            texts: [{
                text: 'C',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0x46',
        label: 'factory',
        preview: {
            type: 'point',
            texts: [{
                text: 'F',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0x47',
        label: 'publicbuilding',
        preview: {
            type: 'point',
            texts: [{
                text: 'G',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0x48',
        label: 'home',
        preview: {
            type: 'point',
            texts: [{
                text: 'H',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0x4A',
        label: 'island',
        preview: {
            type: 'point',
            texts: [{
                text: 'J',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0x4B',
        label: 'motorway',
        preview: {
            type: 'point',
            texts: [{
                text: 'K',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0x4D',
        label: 'mountain',
        preview: {
            type: 'point',
            texts: [{
                text: 'M',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0x50',
        label: 'park',
        preview: {
            type: 'point',
            texts: [{
                text: 'P',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0x51',
        label: 'camping',
        preview: {
            type: 'point',
            texts: [{
                text: 'Q',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0x52',
        label: 'railroad',
        preview: {
            type: 'point',
            texts: [{
                text: 'R',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0x53',
        label: 'stadium',
        preview: {
            type: 'point',
            texts: [{
                text: 'S',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0x54',
        label: 'ship',
        preview: {
            type: 'point',
            texts: [{
                text: 'T',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0x55',
        label: 'soundon',
        preview: {
            type: 'point',
            texts: [{
                text: 'U',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0x59',
        label: 'favorite',
        preview: {
            type: 'point',
            texts: [{
                text: 'Y',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0x62',
        label: 'bicycle',
        preview: {
            type: 'point',
            texts: [{
                text: 'b',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0x64',
        label: 'sheild',
        preview: {
            type: 'point',
            texts: [{
                text: 'd',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0x65',
        label: 'package',
        preview: {
            type: 'point',
            texts: [{
                text: 'e',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0x66',
        label: 'fire',
        preview: {
            type: 'point',
            texts: [{
                text: 'f',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0x68',
        label: 'medical',
        preview: {
            type: 'point',
            texts: [{
                text: 'h',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0x69',
        label: 'information',
        preview: {
            type: 'point',
            texts: [{
                text: 'i',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0x70',
        label: 'police',
        preview: {
            type: 'point',
            texts: [{
                text: 'p',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0x74',
        label: 'train',
        preview: {
            type: 'point',
            texts: [{
                text: 't',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0x75',
        label: 'metro',
        preview: {
            type: 'point',
            texts: [{
                text: 'u',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0x76',
        label: 'bus',
        preview: {
            type: 'point',
            texts: [{
                text: 'v',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0x77',
        label: 'flag',
        preview: {
            type: 'point',
            texts: [{
                text: 'w',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0x81',
        label: 'woman',
        preview: {
            type: 'point',
            texts: [{
                text: '',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0xAF',
        label: 'music',
        preview: {
            type: 'point',
            texts: [{
                text: '¯',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0xAE',
        label: 'theatre',
        preview: {
            type: 'point',
            texts: [{
                text: '®',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0xB4',
        label: 'filmclip',
        preview: {
            type: 'point',
            texts: [{
                text: '´',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0xB5',
        label: 'pointofinterest',
        preview: {
            type: 'point',
            texts: [{
                text: 'µ',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0xB7',
        label: 'film',
        preview: {
            type: 'point',
            texts: [{
                text: '·',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0xB9',
        label: 'video',
        preview: {
            type: 'point',
            texts: [{
                text: '¹',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0xC5',
        label: 'phone',
        preview: {
            type: 'point',
            texts: [{
                text: 'Å',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0xD5',
        label: 'sunny',
        preview: {
            type: 'point',
            texts: [{
                text: 'Õ',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0xD6',
        label: 'mostlysunny',
        preview: {
            type: 'point',
            texts: [{
                text: 'Ö',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0xD7',
        label: 'mostlycloudy',
        preview: {
            type: 'point',
            texts: [{
                text: '×',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0xD8',
        label: 'showers',
        preview: {
            type: 'point',
            texts: [{
                text: 'Ø',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0xD9',
        label: 'cloudy',
        preview: {
            type: 'point',
            texts: [{
                text: 'Ù',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0xDA',
        label: 'snow',
        preview: {
            type: 'point',
            texts: [{
                text: 'Ú',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0xDB',
        label: 'rain',
        preview: {
            type: 'point',
            texts: [{
                text: 'Û',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0xDC',
        label: 'lightning',
        preview: {
            type: 'point',
            texts: [{
                text: 'Ü',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0xDD',
        label: 'twister',
        preview: {
            type: 'point',
            texts: [{
                text: 'Ý',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0xDE',
        label: 'wind',
        preview: {
            type: 'point',
            texts: [{
                text: 'Þ',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0xDF',
        label: 'fog',
        preview: {
            type: 'point',
            texts: [{
                text: 'ß',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0xE1',
        label: 'temperature',
        preview: {
            type: 'point',
            texts: [{
                text: 'á',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0xE4',
        label: 'dining',
        preview: {
            type: 'point',
            texts: [{
                text: 'ä',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0xE5',
        label: 'lounge',
        preview: {
            type: 'point',
            texts: [{
                text: 'å',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0xE7',
        label: 'shopping',
        preview: {
            type: 'point',
            texts: [{
                text: 'ç',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0xE8',
        label: 'parking',
        preview: {
            type: 'point',
            texts: [{
                text: 'è',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0xE9',
        label: 'handycap',
        preview: {
            type: 'point',
            texts: [{
                text: 'é',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0xEC',
        label: 'education',
        preview: {
            type: 'point',
            texts: [{
                text: 'ì',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0xF1',
        label: 'airplane',
        preview: {
            type: 'point',
            texts: [{
                text: 'ñ',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0xF3',
        label: 'bird',
        preview: {
            type: 'point',
            texts: [{
                text: 'ó',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0xF5',
        label: 'dog',
        preview: {
            type: 'point',
            texts: [{
                text: 'õ',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0xF6',
        label: 'cat',
        preview: {
            type: 'point',
            texts: [{
                text: 'ö',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    },
    {
        value: 'ttf://Webdings#0xF4',
        label: 'fish',
        preview: {
            type: 'point',
            texts: [{
                text: 'ô',
                fill: '#333333',
                style: {
                    fontSize: '200px',
                    fontFamily: 'Webdings',
                    transform: 'translate(-50%, 25%)'
                }
            }]
        }
    }
];

export default wellKnownName;
