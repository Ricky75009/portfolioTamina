(async function () {
    if (CSS["paintWorklet"] === undefined) {
      await import("https://unpkg.com/css-paint-polyfill");
    }
  
    CSS.paintWorklet.addModule(
      "https://unpkg.com/@georgedoescode/houdini-random-blobs"
    );
  
    document
      .querySelector(".worklet-canvas")
      .style.setProperty("--blob-seed", Math.random() * 10000);
  })();