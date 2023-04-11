import Image from 'next/image';
import { useState } from 'react';
import ReactImageUploading from 'react-images-uploading';

export default function FilePicker() {
  const [image, setImage] = useState();
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImage(imageList);
  };
  return (
    <div className='App'>
      <ReactImageUploading
        value={image}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey='data_url'
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className='upload__image-wrapper'>
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              upload{' '}
            </button>
            {imageList.map((image, index) => (
              <div key={index} className='image-item'>
                <Image
                  src={image['data_url']}
                  alt=''
                  height={100}
                  width='100'
                />
                <div className='image-item__btn-wrapper'>
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ReactImageUploading>
    </div>
  );
}
