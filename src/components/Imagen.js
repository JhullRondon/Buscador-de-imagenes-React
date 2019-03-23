import React from 'react';

const Imagen = ({imagen}) => {

  const {likes, views, largeImageURL, tags, previewURL} = imagen;

  return (
    <div className='col-6 col-sm-4 col-md-3 mb-4'>
      <div className='card'>
        <img className='card-img-top' src={previewURL} alt={tags} />
        <div className='card-body'>
          <p className='card-text'>{likes} Me gusta</p>
          <p className='card-text'>{views} Vistas</p>
          <a href={largeImageURL} rel="noopener noreferrer" target='_blank' className='btn btn-danger btn-block'>Ver Imagen</a>
        </div>
      </div>
    </div>
  );
};

export default Imagen;