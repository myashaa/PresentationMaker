/**
 * @param { File } file
 * @return { Editor }
 */
function loadPresentation(file) {}

/**
 * @param { Presentation } presentation
 */
function savePresentation(presentation) {}

/**
 * @param { Presentation } presentation
 */
function exportPresentation(presentation) {}

 /**
  * @param { Editor } editor
  * @param { string } name
  * @return { Editor }
  */
function renamePresentation(editor, name) {}

/**
 * @param { Editor } editor
 * @return { Editor }
 */
function createPresentation(editor) {}

/**
 * @param { Editor } editor
 * @return { Editor }
 */
function createSlide(editor) {} // ?

/**
 * @param { Editor } editor
 * @param { number } slideId
 * @return { Editor }  //
 */
function deleteSlide(editor, index) {}

/**
 * @param { Editor } editor
 * @param { number } slideId
 * @param { number } indexTo
 * @return { Editor }
 */
function moveSlide(editor, slideId, indexTo) {}

/**
 * @param { Editor } editor
 * @param { number[] } slideIds
 * @return { Editor }
 */
function selectSlides(editor, slideIds) {}

/**
 * @param { Editor } editor
 * @param { number } slideId
 * @param { string } backgroundType
 * @return { Editor }
 */
function setBackground(editor, slideId, backgroundType) {}

/**
 * @param { Editor } editor
 * @param { number } slideId
 * @return { Editor }
 */
function clearBackground(editor, slideId) {}

/**
 * @param { Editor } editor // заменить Slide на Editor передавать slideId
 * @param { number } slideId
 * @param { (Text | Image | Figure) } elementType
 * @return { Editor }
 */
function createElement(editor, slideId, elementType) {}

/**
 * @param { Editor } editor
 * @param { number } slideId
 * @param { number } elementId
 * @return { Editor }
 */
function removeElement(editor, slideId, elementId) {}

/**
 * @param { Editor } editor
 * @param { number } slideId
 * @return { Editor }
 */
function removeElements(editor, slideId) {}

/**
 * @param { Editor } editor
 * @param { number } slideId
 * @param { Element } element
 * @param { Position } position
 * @return { Editor }
 */
function moveElement(editor, slideId, element, position) {}

/**
 * @param { Editor } editor
 * @param { number } slideId
 * @param { Element } element
 * @param { number } width
 * @param { number } height
 * @return { Editor }
 */
function resizeElement(editor, slideId, element, width, heigth) {}

/**
 * @param { Editor } editor
 * @param { number } slideId
 * @param { Element } element
 * @param { Border } border
 * @return { Editor }
 */
function changeElementBorder(editor, slideId, element, border) {}

/**
 * @param { Editor } editor
 * @param { number } slideId
 * @param { Element } element
 * @param { string } color
 * @return { Editor }
 */
function changeElementColor(editor, slideId, element, color) {}

/**
 * @param { Editor } editor
 * @param { number } slideId
 * @param { Element } element
 * @param { string } fontFamily
 * @return { Editor }
 */
function setFontFamily(editor, slideId, element, fontFamily) {}

/**
 * @param { Editor } editor
 * @param { number } slideId
 * @param { Element } element
 * @param { string } color
 * @return { Editor }
 */
function sentFontColor(editor, slideId, element, color) {}

/**
 * @param { Editor } editor
 * @param { number } slideId
 * @param { Element } element
 * @param { number } size
 * @return { Editor }
 */
function setFontSize(editor, sldeId, element, size) {}

/**
 * @param { Editor } editor
 * @param { number } slideId
 * @param { Element } element
 * @param { string } filter
 * @return { Editor }
 */
function setFilter(editor, slideId, element, filter) {}

/**
 * @param { Editor } editor
 * @param { number } slideId
 * @param { Element } element
 * @return { Editor }
 */
function deleteFilter(editor, slideId, element) {}

/**
 * @param { Editor } editor
 * @param { string } mode
 * @return { Editor }
 */
function changeMode(editor, mode) {}

/**
 * @param { Editor } editor
 * @param { Element } element
 * @param { Image } image
 * @return { Editor }
 */
function loadImage(editor, element, image) {}

/**
 * @param { Editor } editor
 * @param { Presentation } presentation
 * @param { number } slideId
 * @return { Editor }
 */
function selectSlide(editor, presentation, slideId) {}

/**
 * @param { Editor } editor
 * @return { Editor }
 */
function undo(editor) {}

/**
 * @param { Editor } editor
 * @return { Editor }
 */
function redo(editor) {}
