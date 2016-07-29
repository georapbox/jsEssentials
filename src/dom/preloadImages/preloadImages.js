/**
 * Load images to browser asynchronously so that can be cached.
 * Can be called as many times as we want and each time, it will just add more images to browser's cache.
 *
 * @category DOM
 * @param {Array} images An array of strings that represent the path of the images to be cached.
 * @param {function} [successCallback] A function to be executed if all images are successfully loaded.
 * @param {function} [errorCallback] A function to be executed after any of the images could not be loaded.
 * @throws {TypeError} If `images` is not array.
 * @example
 *
 * preloadImages([
 *   'http://eskipaper.com/images/fantasy-wallpapers-1.jpg',
 *   'http://eskipaper.com/images/fantasy-wallpapers-2.',
 *   'http://7-themes.com/data_images/out/32/6878038-fantasy-wallpaper.jpg',
 *   'http://www.pageresource.com/wallpapers/wallpaper/fantasy-wallpaper-wallpapers.jpg',
 *   'http://www.magic4walls.com/wp-content/uploads/2013/12/fantasy-wallpaper-castle-wallpapers-array-wallwuzz-hd-wallpaper-4802.jpg'
 * ], function (images) {
 *   console.log('All ' + images.length + ' images have been successfully loaded.');
 * }, function (error, image) {
 *   console.error(error);
 *   console.log(image);
 * });
 */
function preloadImages(images, successCallback, errorCallback) {
    'use strict';

    var list, i, len, img;

    function onloadSuccess(image) {
        var index;

        image.onload = function imagesLoadSuccess() {
            index = list.indexOf(this);

            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);

                if (list.length === 0) {
                    successCallback && successCallback(images);
                }
            }
        };

        image.onerror = function imageLoadError(error) {
            errorCallback && errorCallback(error, image);
        };
    }

    if (Object.prototype.toString.call(images) !== '[object Array]') {
        throw new TypeError('Expected an array');
    }

    if (!preloadImages.list) {
        preloadImages.list = [];
    }

    list = preloadImages.list;
    i = 0;
    len = images.length;

    for (i; i < len; i += 1) {
        img = new Image();
        onloadSuccess(img);
        list.push(img);
        img.src = images[i];
    }
}
