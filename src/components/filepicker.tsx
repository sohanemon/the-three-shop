// @ts-nocheck
import Image from 'next/image';
import { useState } from 'react';
import ReactImageUploading, { ImageListType } from 'react-images-uploading';
import Button from './button';
import { useDispatch } from 'react-redux';
import { setCurrentTab, setTextureImg } from '@/slices/editor-slice';

export default function FilePicker() {
  const [image, setImage] = useState<ImageListType>();
  const dispatch = useDispatch();

  function handleTexture() {
    // @ts-ignore
    dispatch(setTextureImg(image[0].data_url));
    dispatch(setCurrentTab(''));
  }

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
              <Button customStyle='text-sm' onClick={onImageUpload} type='fill'>
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
                    <Button
                      onClick={onImageUpdate}
                      customStyle='text-sm'
                      type='outline'
                    >
                      Update
                    </Button>
                    <Button
                      onClick={handleTexture}
                      customStyle='text-sm'
                      type='fill'
                    >
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
