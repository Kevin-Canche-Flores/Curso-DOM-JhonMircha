export default function userDeviceInfo(id) {
  //Este archivo nos fue compartido mediante el profesor Jonathan Mircha.
  const $id = document.getElementById(id);

  const isMobile = {
      android: () => navigator.userAgent.match(/android/i),
      ios: () => navigator.userAgent.match(/iphone|ipad|ipod/i),
      windows: () => navigator.userAgent.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      }
    },
    isDesktop = {
      linux: () => navigator.userAgent.match(/linux/i),
      mac: () => navigator.userAgent.match(/mac os/i),
      windows: () => navigator.userAgent.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      }
    },
    isBrowser = {
      chrome: () => navigator.userAgent.match(/chrome/i),
      safari: () => navigator.userAgent.match(/safari/i),
      firefox: () => navigator.userAgent.match(/firefox/i),
      opera: () => navigator.userAgent.match(/opera|opera mini/i),
      ie: () => navigator.userAgent.match(/msie|iemobile/i),
      edge: () => navigator.userAgent.match(/edge/i),
      any: function () {
        return (
          this.chrome() ||
          this.safari() ||
          this.firefox() ||
          this.opera() ||
          this.ie() ||
          this.edge()
        );
      }
    };

  $id.innerHTML = `
    <ul>
      <li>User Agent: <b>${navigator.userAgent}</b></li>
      <li>Plataforma: <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></li>
      <li>Navegador: <b>${isBrowser.any()}</b></li>
    </ul>
  `;

  /*Contenido Exclusivo, esto con la finalidad de como manipular cierto tipo de contenido para cierto tipo de navegadores o tipo de ordenadores o dispositivo mobile: android o ios.*/

  /*Apartado de Navegadores*/
  if (isBrowser.chrome()) $id.innerHTML += `<p><i>Este contenido sólo se ve en Chrome.</i></p>`
  if (isBrowser.safari()) $id.innerHTML += `<p><i>Este contenido sólo se ve en Safari.</i></p>`
  if (isBrowser.firefox()) $id.innerHTML += `<p><i>Este contenido sólo se ve en Firefox.</i></p>`
  if (isBrowser.opera()) $id.innerHTML += `<p><i>Este contenido sólo se ve en Opera.</i></p>`
  if (isBrowser.ie()) $id.innerHTML += `<p><i>Este contenido sólo se ve en Internet Explorer.</i></p>`
  if (isBrowser.edge()) $id.innerHTML += `<p><i>Este contenido sólo se ve en Microsoft Edge.</i></p>`

  /*Apartado de Ordenadores*/
  if (isDesktop.linux()) $id.innerHTML += `<p><i>Descarga nuestro software para Linux</i></p>`
  if (isDesktop.mac()) $id.innerHTML += `<p><i>Descarga nuestro software para Mac</i></p>`
  if (isDesktop.windows()) $id.innerHTML += `<p><i>--Descarga nuestro software para Windows--</i></p>`
  
  /*Apartado de Redirecciones... */
  if(isMobile.ios()) window.location.href = "https://kevin-canche-flores.github.io/Mi-Pagina-Web/"
}
