function getStudentIdsSum(array) {
  return array.reduce((agg, student) => agg + student.id, 0);
}

export default getStudentIdsSum;
