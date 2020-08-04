import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;

  //convert to a lodash wrapper object, then take the chunk we want and convert to an array before returning it
  console.log(_(items).slice(startIndex).take(pageSize).value());
  return _(items).slice(startIndex).take(pageSize).value();
}
