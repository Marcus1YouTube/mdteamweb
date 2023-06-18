export function getPreviousTasks(index, tasks) {
  const result = [];

  for (let i = 0; i < tasks.length; i++) {
    if (i < index) {
      result.push(`${tasks[i]} kész`);
    } else if (i === index && i !== tasks.length - 1) {
      result.push(`${tasks[i]} kész`);
    } else {
      result.push(tasks[i]);
    }
  }

  return result;
}
