//formacion de la figura 2D apartir de sus vertices para asegurar su correcta formacion

function poligono(nlados, ladoigual) {

    const vertices = [];

    const ang = 2*Math.PI/nlados;

    for (let i = 0; i <= nlados; i++) {
        let x = ladoigual * Math.cos(i * ang);
        let y = ladoigual * Math.sin(i * ang);
        vertices[i] = new THREE.Vector3(x, y, 0);
    }

    //retornamos los vertices para usarlo en la funcion prisma
    return vertices;
}

//funcion prisma que extruye la geometria y la vulve 3D

function prisma(nlados,ladosigual,altura){

  verticess=poligono(nlados,ladosigual);

  const shape = new THREE.Shape(verticess);

  // Extrucion de las caras y quitamos el biselado
  const extrudeSettings = {
  depth: altura,
  bevelEnabled: false 
  };
  
  // Creamos la figura ya 3D
  const geometry = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings);

  const material = new THREE.MeshBasicMaterial({ color: 0x0000FF });
  const mesh = new THREE.Mesh(geometry, material);

  // Material para visualizar los vertices y el total de caras de la figura
  const materialVertices = new THREE.LineBasicMaterial({color: 0x000000});
  const meshVertices = new THREE.LineLoop(geometry, materialVertices);

  //agregamos a la escena el material de vertices que permie visualizar
  scene.add(meshVertices);

  //retornamos la figura con el material para que sea visible
  return mesh;
}


