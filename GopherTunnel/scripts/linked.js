// Time complexity of dijkstra's alg is O(|E| + |V|lon|V|)

const locations = {
  "Point 1": [{ node: "Point 5", dist: 0.0126, type: "Folwell Hall" }],

  "Point 2": [{ node: "Point 4", dist: 0.0398, type: "Walter Library" }],

  "Point 5": [
    { node: "Point 1", dist: 0.0126, type: "Nolte Center" },
    { node: "Point 6", dist: 0.0415, type: "Tate Hall" },
    { node: "Point 3", dist: 0.0415, type: "Tate Hall" },
  ],

  "Point 6": [{ node: "Point 5", dist: 0.0415, type: "Nolte Center" }],

  "Point 3": [
    { node: "Point 5", dist: 0.0415, type: "Nolte Center" },
    { node: "Point 7", dist: 0.0135, type: "Walter Library" },
    { node: "Point 4", dist: 0.0075, type: "Walter Library" },
  ],

  "Point 4": [
    { node: "Point 2", dist: 0.0398, type: "Nolte Center" },
    { node: "Point 3", dist: 0.0075, type: "Nolte Center" },
  ],

  "Point 7": [
    { node: "Point 3", dist: 0.0135, type: "Nolte Center" },
    { node: "Point 8", dist: 0.0333, type: "Nolte Center" },
  ],

  "Point 8": [
    { node: "Point 7", dist: 0.0333, type: "Nolte Center" },
    { node: "Point 11", dist: 0.0643, type: "Nolte Center" },
    { node: "Point 10", dist: 0.0835, type: "Nolte Center" },
  ],

  "Point 9": [{ node: "Point 10", dist: 0.0218, type: "Nolte Center" }],

  "Point 10": [
    { node: "Point 9", dist: 0.0218, type: "Nolte Center" },
    { node: "Point 11", dist: 0.0523, type: "Nolte Center" },
    { node: "Point 8", dist: 0.0835, type: "Nolte Center" },
    { node: "Point 13", dist: 0.1258, type: "Nolte Center" },
  ],

  "Point 11": [
    { node: "Point 8", dist: 0.0643, type: "Nolte Center" },
    { node: "Point 10", dist: 0.0523, type: "Nolte Center" },
    { node: "Point 12", dist: 0.0133, type: "Nolte Center" },
  ],

  "Point 12": [
    { node: "Point 11", dist: 0.0133, type: "Nolte Center" },
    { node: "Point 14", dist: 0.1345, type: "Nolte Center" },
  ],

  "Point 13": [{ node: "Point 10", dist: 0.1258, type: "Nolte Center" }],

  "Point 14": [{ node: "Point 12", dist: 0.1345, type: "Nolte Center" }],
};

function dijkstra(locations, start, end) {
  const distances = {};
  const visited = {};
  const predecessors = {};
  const queue = new PriorityQueue();

  // Initialize distances and predecessors
  for (const node in locations) {
    distances[node] = Infinity;
    predecessors[node] = null;
  }
  distances[start] = 0;

  // Enqueue the start node with its tentative distance
  queue.enqueue(start, distances[start]);

  while (!queue.isEmpty()) {
    // Dequeue the node with the smallest tentative distance
    const current = queue.dequeue();

    // If we've reached the end node, construct and return the path
    if (current === end) {
      const path = [];
      let node = end;
      while (node !== start) {
        path.unshift(node);
        node = predecessors[node];
      }
      path.unshift(start);
      return path;
    }

    // Mark the current node as visited
    visited[current] = true;

    // Update distances for each adjacent node
    for (const { node, dist } of locations[current]) {
      if (!visited[node]) {
        const tentativeDistance = distances[current] + dist;
        if (tentativeDistance < distances[node]) {
          distances[node] = tentativeDistance;
          predecessors[node] = current;
          queue.enqueue(node, distances[node]);
        }
      }
    }
  }

  // If we get here, there is no path to the end node
  return null;
}

// A priority queue implementation
class PriorityQueue {
  constructor() {
    this.elements = [];
  }

  enqueue(element, priority) {
    this.elements.push({ element, priority });
    this.elements.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.elements.shift().element;
  }

  isEmpty() {
    return this.elements.length === 0;
  }
}

const startNode = "Point 13";
const endNode = "Point 14";
const shortestPath = dijkstra(locations, startNode, endNode);

console.log(
  `The shortest path from ${startNode} to ${endNode} is: ${shortestPath.join(
    " -> "
  )}`
);
