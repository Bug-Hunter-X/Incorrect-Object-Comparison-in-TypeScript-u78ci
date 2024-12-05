function compareObjects(obj1: any, obj2: any): boolean {
  // Check if both objects are null or undefined
  if (obj1 === null && obj2 === null) return true;
  if (obj1 === null || obj2 === null) return false;

  // Check if both objects have the same number of properties
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;

  // Check if both objects have the same properties and values
  for (let i = 0; i < keys1.length; i++) {
    const key = keys1[i];
    // Recursive comparison for nested objects
    if (typeof obj1[key] === 'object' && obj1[key] !== null && typeof obj2[key] === 'object' && obj2[key] !== null) {
      if (!compareObjects(obj1[key], obj2[key])) return false; 
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}