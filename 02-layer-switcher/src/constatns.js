/** wms settings **/
const cr_extent = [1326778.08, 6144135.47, 2111439.32, 6686027.76];


/** WMTS calculations **/
const wmts_resolutions = new Array(15);
const wmts_matrixIds = new Array(15);
const size = 524354/256;
const wmts_sizes = new Array(15);
for (let z = 0; z < 15; ++z) {
  // generate resolutions and matrixIds arrays for this WMTS
  wmts_resolutions[z] = size / Math.pow(2, z);
  wmts_matrixIds[z] = z;
  wmts_sizes[z] = [Math.pow(2,z)*2, Math.pow(2,z)];
}

export {cr_extent, wmts_resolutions, wmts_matrixIds, wmts_sizes};
