export default function flattenRoutes(routes, basePath = '') {
    //Recibe la sección de rutas a analizar, y el concatenado -> /admin/course... si no lo declara vacío ''
    //SIEMPRE crea un arreglo vacío
    const flat = [];
    //Recorre todas las rutas de la sección que está analizando
    for(const route of routes) {
        //Por cada ruta de la sección concatena la ruta que ya trae hasta ahora + / si la siguiente ruta trae path -> /admin/course
        const fullPath = basePath + '/' + (route.path || '');

        //Si hay label agrega al arreglo flat un objeto con la ruta creada hasta ahora y el label de esa ruta -> {path: /admin/course,  label: 'Cursos'}
        //Previene el doble slash
        if(route.label) {
            flat.push({
                path: fullPath.replace(/\/+/g, '/'),
                label: route.label
            });
        }

        //Si la sección tiene hijos escarba en ellos hasta tocar fondo y agrega sus rutas a flat, se le envía los hijos de la sección y la ruta construida hasta ahora
        //La ruta base cambia cada que se termina de escarbar el fondo de la sección
        if(route.children) {
            flat.push(...flattenRoutes(route.children, fullPath));
        }
    }
    return flat;
}