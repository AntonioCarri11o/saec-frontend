export const getCursos = async () => {
    try {
      const response = await fetch('https://api.jsonbin.io/v3/qs/67e220478561e97a50f23a9e');
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
      const data = await response.json();
      return data; 
    } catch (error) {
      console.error('Hubo un error:', error);
      throw error;
    }
};

