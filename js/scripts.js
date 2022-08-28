window.onload = function() {
  const body = document.querySelector("body");
  const badH1 = document.querySelector("h1");
  badH1.remove();
  const h1 = document.createElement("h1");
  h1.append("Webpage Recreation Practice");
  const p1 = document.createElement("p");
  p1.append("The HTML of this webpage was created with JavaScript");
  const img = document.createElement("img");
  img.setAttribute('src', 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900');
  img.setAttribute('alt', 'This is an image of a Multicolored Tanager bird from birdsoftheworld.org');
  img.setAttribute('style', 'width:50%');
  const h1_2 = document.createElement("h1");
  h1_2.append("Facts about the Multicolored Tanager");
  const ul = document.createElement("ul");
  const li1 = document.createElement("li"); 
  const li2 =  document.createElement("li");
  const li3 =  document.createElement("li");
  li1.append("It is endemic to the mountains of Colombia.");
  li2.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
  ul.append(li1, li2);
  const h2 = document.createElement("h2");
  h2.append("Source");
  const link = document.createElement("a");
  link.innerText = "Google";
  link.setAttribute("href", "http://google.com.");
  body.append(h1, p1, img, h1_2, ul, h2, link);
}