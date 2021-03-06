/* eslint-disable import/no-unresolved */
// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import staff from './staff';
import post from './post';
import abtFiles from './abtFiles';
import photos from './photos';
import calendar from './calendar';
import tables from './tables';
import maps from './maps';
import map from './objects/map';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    staff,
    post,
    abtFiles,
    photos,
    calendar,
    maps,
    map,
    tables,
  ]),
});
