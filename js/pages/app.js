const gtp2Button = document.getElementById("gtp-2");
gtp2Button?.addEventListener("dblclick", function () {
  //   location.href = "page2.html";
  location.assign("page2.html");
  //   location.assign("https://google.com");

  //   location.reload();
});

const gtp1Button = document.getElementById("gtp-1");
gtp1Button?.addEventListener("dblclick", function () {
  location.assign("page1.html");

  // location.href = "page1.html";
  //   location.replace("page1.html");
});

const gtb1Button = document.getElementById("gtb");
gtb1Button?.addEventListener("dblclick", function () {
  // location.href = "page1.html";
  //   location.replace("page1.html");
  history.back();
});

const gtfButton = document.getElementById("gtf");
gtfButton?.addEventListener("dblclick", function () {
  // location.href = "page1.html";
  //   location.replace("page1.html");
  //   history.forward();
  // var monkeyWindow = open();
  // var windowContent = "<h1>Capuchin monkey</h1><img src= 'monkey jpg'><p>The word capuchin derives from a group of friars<br>named the Order of Friars Minor Capuchin who wear<br>brown robes with large hoods covering their heads.</p>";
  // monkeyWindow.document.write(windowContent);

  close();
});

// try {
//   const a = [];
//   alert("JS Running");
//   a.map();
//   alert("JS Running Internal");
// } catch (error) {
//   console.log("error", error);
// }

// alert("JS Running Again");

const userAge = +prompt("Enter your age");
if (userAge < 18) throw "User must be 18+";

alert("Success");
