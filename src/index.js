export default function App({
	container,
	iframes = [],
	standardWidth = 1920,
	minimumWidth = 1200,
    zoomCallback
}) {
	const isSupportAdaption = (() => {
		const userAgent = navigator.userAgent;
		const isIE =
			userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
		const isIE11 =
			userAgent.indexOf("Trident") > -1 && userAgent.indexOf("rv:11.0") > -1;
		const isFireFox = userAgent.indexOf("Firefox") > -1;

		if (isIE || isIE11 || isFireFox) {
			if (isIE) {
				const reIE = new RegExp("MSIE (\\d+\\.\\d+);");
				reIE.test(userAgent);
				const fIEVersion = parseFloat(RegExp["$1"]);
				if (fIEVersion > 9) {
					return "scale ie";
				} else {
					return false;
				}
			} else if (isIE11) {
				return "scale ie";
			} else {
				return "scale firefox";
			}
		} else {
			return "zoom";
		}
	})();

	if (!isSupportAdaption) return;

	webSelfAdaption();

	window.onresize = function () {
		webSelfAdaption();
	};

	function webSelfAdaption() {
		const w = document.documentElement.offsetWidth || document.body.offsetWidth;
		const limit = minimumWidth / standardWidth;
		const z = (() =>
			w / standardWidth >= limit ? w / standardWidth : limit)();
		const arr = [container, ...iframes];

		if (isSupportAdaption === "zoom") {
			for (let index = 0; index < arr.length; index++) {
				const element =
					index === 0
						? document.querySelector(arr[index])
						: document.querySelector(arr[index]).contentWindow.document.body;
				element.style.zoom = z;
			}
		} else if (
			isSupportAdaption === "scale ie" ||
			isSupportAdaption === "scale firefox"
		) {
			if (z < 1) return;

			for (let index = 0; index < arr.length; index++) {
				const element =
					index === 0
						? document.querySelector(arr[index])
						: document.querySelector(arr[index]).contentWindow.document.body;
				element.style.transform = "scale(" + z + ", " + z + ")";
				element.style.style.transformOrigin = "center top";
			}
		}

        typeof zoomCallback === "function" && zoomCallback(z);
	}
}
