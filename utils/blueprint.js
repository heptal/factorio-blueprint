import pako from 'pako'


export const decode = function (blueprintString) {
  try {
    var result = pako.inflate(atob(blueprintString.slice(1)), { to: 'string' });
  } catch (err) {
    console.log(err);
  }
  return result
}

export const encode = function(obj) {
  return '0' + btoa(pako.deflate(JSON.stringify(obj), { to: 'string' }))
}

export const blueprintToGridPosition = (x, y) => {
  let gridX = Math.round(x + offset.x + 3 + sizeToPositionOffset(entity_meta.width));
  let gridY = Math.round(y + offset.y + 3 + sizeToPositionOffset(entity_meta.height));

}

export const sizeToPositionOffset = (size) => {
      return -0.5 * (size - 1)
}

export const blueprintToGridSize = (blueprint) => {
     let [minX, maxX, minY, maxY] = [0, 0, 0, 0];
    blueprint.blueprint.entities.forEach(function(entity) {
      const pos = entity.position;
      [minX, maxX] = [pos.x < minX ? pos.x : minX, pos.x > maxX ? pos.x : maxX];
      [minY, maxY] = [pos.y < minY ? pos.y : minY, pos.y > maxY ? pos.y : maxY];
    })

    const offset = 5
    const gridSize = 11
    const cols = Math.trunc(maxX - minX) + gridSize
    const rows = Math.trunc(maxY - minY) + gridSize
    const dX = minX < 0 ? offset - minX : offset
    const dY = minY < 0 ? offset - minY : offset

    return [cols, rows, dX, dY]
}

