function getListStudentIds(object) {
  let array = [];
  if (object instanceof Array) {
    array = object.map((item) => item.id);
  }
  return array;
}
export default getListStudentIds;
