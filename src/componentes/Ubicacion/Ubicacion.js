import "./Ubicacion.scss";

const Ubicacion = () => {
  return (
    <section id="UBICACION">
      <div className="center">
        <h2>- UBICACION -</h2>
      </div>
      <div className="fondo">
        <div className="center">
          <h3>Av. Salvador Maria Del Carril 2928, CABA</h3>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.7690915587027!2d-58.50102462494868!3d-34.59099357214795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6481e617b95%3A0x4fc10aa5aae54755!2sAv.%20Salvador%20Mar%C3%ADa%20del%20Carril%202928%2C%20C1419GZT%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1684405578973!5m2!1ses!2sar"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Ubicacion;
