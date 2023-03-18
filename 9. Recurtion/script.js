function dotProduct(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
      ps += v1[i] * v2[i];
    }
    return ps;
  }
  
  function checkOrthogonalVectors(n) {
    let vectors = [];
    for (let i = 0; i < n; i++) {
      let v1 = prompt("Enter vector 1 (separated by commas): ").split(",").map(Number);
      let v2 = prompt("Enter vector 2 (separated by commas): ").split(",").map(Number);
      let ps = dotProduct(v1, v2);
      if (ps === 0) {
        console.log(`Vectors ${v1} and ${v2} are orthogonal.`);
      } else {
        console.log(`Vectors ${v1} and ${v2} are not orthogonal.`);
      }
      vectors.push([v1, v2]);
    }
    return vectors;
  }