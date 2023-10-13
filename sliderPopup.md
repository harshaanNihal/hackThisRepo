## Custom time popup on media player slider(this is based on percentage of slider position)

#### JavaScript
```js
const slider = document.getElementById("slider");
const slidertitle = document.getElementById("slidertitle");

const sliderOffsetX = slider.getBoundingClientRect().left - document.documentElement.getBoundingClientRect().left;
const sliderOffsetY = slider.getBoundingClientRect().top - document.documentElement.getBoundingClientRect().top;

const sliderWidth = slider.offsetWidth - 1;

slider.addEventListener('mousemove', function(event) {
  const currentMouseXPos = (event.clientX + window.pageXOffset) - sliderOffsetX;
  let sliderValAtPos = Math.round(currentMouseXPos / sliderWidth * 100 + 1);
  // this...
  if(sliderValAtPos < 0) sliderValAtPos = 0;
  // ... and this are to make it easier to hover on the "0" and "100" positions
  if(sliderValAtPos > 100) sliderValAtPos = 100;
  slidertitle.innerHTML = sliderValAtPos;
  slidertitle.style.top = sliderOffsetY - 15 + 'px';
  slidertitle.style.left = currentMouseXPos + 'px';
});

```

#### CSS
```css
#slider {
  margin-top: 10px;
}

#slidertitle {
  display: none;
  position: absolute;
  cursor: default;
  top: 0;
  left: 0;
}

#container:hover > #slidertitle {
  display: block;
}
```


#### HTML
```html
<div id="container">
  <input type="range" min="0" max="100" step="1" id="slider"/>
  <span id="slidertitle"></span>
</div>
```
