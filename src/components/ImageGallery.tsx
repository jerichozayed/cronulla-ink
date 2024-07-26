const ImageGallery = () => {
    return (
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/2">
            <div className="w-1/2 p-1 md:p-2">
              <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                src="https://source.unsplash.com/500x500/?tattoo" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                src="https://source.unsplash.com/501x501/?tattoo" />
            </div>
            <div className="w-full p-1 md:p-2">
              <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                src="https://source.unsplash.com/600x600/?tattoo" />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="w-full p-1 md:p-2">
              <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                src="https://source.unsplash.com/601x601/?tattoo" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                src="https://source.unsplash.com/502x502/?tattoo" />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                src="https://source.unsplash.com/503x503/?tattoo" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ImageGallery;
  