# auto-resize

web automatic adaptation

## Installation

```bash
npm i @phaoerjs/auto-resize
```

## Useage

```javascript
autoResize({
	container: "#content",
	iframes: [".iframes"],
	standardWidth: 1920,
	minimumWidth: 1200, 
	zoomCallback: function (res) {
	    console.log(res);
	},
});
```

## Option

- container

  Body or any other element

- iframes

  When an iframe is embedded, it can be configured to scale the iframe

- standardWidth

  Web page standard width

- minimumWidth

  When the width is less than or equal to minimaWidth, no scaling is performed

- zoomCallback

  Every time you make a zoom, this function will be called and you can replace the background image
