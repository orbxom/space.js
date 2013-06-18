// process.argv[2] is cluster count
//
var clusterCount = process.argv[2];
var galaxyClusters = new Array();
var x = 0,
    y = 0;
for (i = 0; i < clusterCount; i++) {
  // create crazy random number, ready go
  // remove decimal pretty much
  var resources = parseInt(Math.random().toString().split('.')[1]);
  galaxyClusters.push({
    type: 'cluster',
    location: {x: x++, y: y++},
    resources: resources
  });
}

console.log(galaxyClusters);

var galaxies = new Array();

for (var i = 0; i < galaxyClusters.length; i++) {
  var cluster = galaxyClusters[i];
  console.log(cluster);
  var remainingResources = cluster.resources;
  console.log('resources = ' + remainingResources)
  for(var x = 0; x < 100; x++) {
    for(var y = 0; y < 100; y++) {
      var resources = parseInt(Math.random().toString().split('.')[1]) % remainingResources;
       resources = (resources % 149 == 0) ? 0 : resources; // randomly give it no resources
      remainingResources = ((remainingResources - resources) > 0) ? remainingResources - resources : remainingResources ;
      galaxies.push({
        type: 'galaxy',
        location: {x: x, y: y},
        resources: (resources > 0) ? resources : parseInt(Math.random().toString().split('.')[1].slice(0,6)),
      });
    }
  }
};

console.log(galaxies);
