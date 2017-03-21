import Template from '../Template/Template';

export default class FooterTemplate extends Template {

    compile({ year }) {
      return `<p>&#169; ${year} austin rooks. Icons made by
      <a href="http://www.freepik.com/" target="_blank">Freepik</a> and
      <a href="http://www.flaticon.com/authors/wissawa-khamsriwath">Wissawa Khamsriwath</a> from
      <a href="www.flaticon.com">www.flaticon.com</a></p>`
    }
}
