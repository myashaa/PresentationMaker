/**
 * @param { File } file
 * @return { Presentation }
 */
function loadPresentation(file) {}

/**
 * @param { Presentation } presentation
 * @return { File }
 */
function savePresentation(presentation) {}

/**
 * @param { Presentation } presentation
 * @return { File }
 */
function exportPresentation(presentation) {}

/**
 * @param { string } name
 * @param { Presentation } presentation
 * @return { Presentation }
 */
function renamePresentation(name, presentation) {}

/**
 * @return { Presentation }
 */
function createPresentation() {}

/**
 * @param { History } history
 * @param { Action[] } actions
 * @return { History }
 */
function saveChanges(history, actions) {}

/**
 * @param { Presentation } presentation
 * @return { Presentation }
 */
function createSlide(presentation) {}

/**
 * @param { Presentation } presentation
 * @param { number } index
 * @return { Presentation }
 */
function deleteSlide(presentation, index) {}

/**
 * @param { Presentation } presentation
 * @param { number } index
 * @param { number } indexTo
 * @return { Presentation }
 */
function moveSlide(presentation, index, indexTo) {}

/**
 * @param { Presentation } presentation
 * @param { number[] } slideIds
 * @return { Presentation }
 */
function selectSlides(presentation, slideIds) {}

/**
 * @param { Presentation } presentation
 * @return { Presentation }
 */
function deleteSlide(presentation) {}

/**
 * @param { Slide } Slide
 * @param { Animation } animation
 * @return { Slide }
 */
function setAnimation(slide, animation) {}

/**
 * @param { Slide } slide
 * @return { Slide }
 */
function deleteAnimation(slide) {}

/**
 * @param { Slide } slide
 * @param { string } backgroundType
 * @return { Slide }
 */
function setBackground(slide, backgroundType) {}

/**
 * @param { Slide } slide
 * @return { Slide }
 */
function clearBackground(slide) {}

/**
 * @param { Slide } slide
 * @param { (Text | Image | Figure) } elementType
 * @return { Slide }
 */
function createElement(slide, elementType) {}

/**
 * @param { Slide } slide
 * @param { number } index
 * @return { Slide }
 */
function removeElement(slide, index) {}

/**
 * @param { Slide } slide
 * @return { Slide }
 */
function removeElements(slide) {}

/**
 * @param { Element } element
 * @param { Position } position
 * @return { Element }
 */
function moveElement(element, position) {}

/**
 * @param { Element } element
 * @param { number } width
 * @param { number } height
 * @return { Element }
 */
function resizeElement(element, width, heigth) {}

/**
 * @param { Element } element
 * @param { Border } border
 * @return { Element }
 */
function changeElementBorder(element, border) {}

/**
 * @param { Element } element
 * @param { string } color
 * @return { Element }
 */
function changeElementColor(element, color) {}

/**
 * @param { Element } element
 * @param { string } fontFamily
 * @return { Element }
 */
function setFontFamily(element, fontFamily) {}

/**
 * @param { Element } element
 * @param { string } color
 * @return { Element }
 */
function sentFontColor(element, color) {}

/**
 * @param { Element } element
 * @param { number } size
 * @return { Element }
 */
function setFontSize(element, size) {}

/**
 * @param { Element } element
 * @param { string } filter
 * @return { Element }
 */
function setFilter(element, filter) {}

/**
 * @param { Element } element
 * @return { Element }
 */
function deleteFilter(element) {}

/**
 * @param { Presentation } presentation
 * @param { string } mode
 * @return { Presentation }
 */
function changeMode(presentation, mode) {}

/**
 * @param { Element } element
 * @param { Image } image
 * @return { Element }
 */
function loadImage(element, image) {}

/**
 * @param { Presentation } presentation
 * @param { number } slideId
 * @return { Slide }
 */
function selectSlide(presentation, slideId) {}
