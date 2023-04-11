import Image from 'next/image';
import { MouseEvent, MouseEventHandler, useState } from 'react';
import ReactImageUploading, { ImageListType } from 'react-images-uploading';
import Button from './button';

export default function FilePicker() {
  const [image, setImage] = useState<ImageListType>();
  console.log('🛑 ~ FilePicker ~ image:', image);

  return (
    <div className='App'>
      <ReactImageUploading
        value={image!}
        onChange={(img) => setImage(img)}
        dataURLKey='data_url'
      >
        {({ imageList, onImageUpload, onImageUpdate, onImageRemove }) => (
          <div className='flex flex-col items-center'>
            {!imageList[0] && (
              <Button customStyle='' onClick={onImageUpload} type='outline'>
                Upload
              </Button>
            )}
            {imageList.map((image, index) => (
              <div key={index} className='image-item'>
                <Image
                  src={image['data_url']}
                  alt=''
                  className='w-40 h-20 object-cover'
                  height={100}
                  width={100}
                />
                <br />
                {imageList[0] && (
                  <div className='flex flex-col gap-1'>
                    {/* @ts-ignore */}
                    <Button onClick={onImageUpdate} type='outline'>
                      Update
                    </Button>
                    {/* @ts-ignore */}
                    <Button onClick={() => {}} type='fill'>
                      Done
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </ReactImageUploading>
    </div>
  );
}
