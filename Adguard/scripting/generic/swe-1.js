/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

// swe-1

// Important!
// Isolate from global scope
(function uBOL_cssGenericImport() {

/******************************************************************************/

const genericSelectorMap = [[10548519,".lazyb.panorama"],[16223198,"article.NativeTeaser"],[9214811,"article.annons"],[1928992,"article.sponsrad"],[12779961,"article.article-list-item--sponsored-post"],[16250836,"article.article-sponsored"],[7712510,"article.article--sponsored"],[6368010,"article.category-partnerartikel"],[5603900,"article.category-promotion"],[8631626,"article.category-reklam"],[5609471,"article.category-samarbete"],[6786219,"article.category-samarbete-sponsrat"],[9624217,"article.category-samarbete-sponsrat-inlagg"],[9893738,"article.sponsrat-inlagg"],[8510652,"article.tag-adtraction"],[15412470,"article.tag-annons"],[12980391,"article.type-partnerartikel"],[8306265,"aside.ad-container"],[1740178,"aside.annonser-widget"],[10839172,"a#top-banner.banner-holder"],[2935580,"a.Teaser[data-content-item-category=\"Annons\"]"],[6270360,"a.adv-link"],[1334494,"a.card.-sponsored"],[1054922,"a.is-native-ad"],[13664737,"body[data-site-namespace=\"tailsweep\"] #premiumAdWrapper"],[2785602,"div.NativeAd"],[2563173,"div.adDivLeft"],[988566,"div.adDivRight"],[7741203,"div.adLinkInner"],[3287649,"div.adSidebar"],[1647817,"div.ad.container,\ndiv.ad.panorama"],[1813948,"div.annonsbox"],[14920830,"div.bbPrisjakt"],[4926550,"div.holidAds"],[3979921,"div.outsideAdsWrapper"],[3395972,"div.panoramaAd"],[14522945,"div.toppannons,\ndiv.top-annons"],[11183194,"div.wppasrotate"],[2619388,"div#ads-panorama"],[6330361,"div#ads_column"],[9460686,"div#adv_rightColumn"],[11344569,"div#ad_global_below_navbar"],[13640610,"div#ad_top_page"],[12279465,"div#annons_topp"],[12846712,"div#banner_right"],[1853156,"div#block-adreviveheader"],[13145640,"div#custom_ads_wrapper"],[3656754,"div#facebook-popup"],[11962707,"div#mega-ad-content"],[6331576,"div#outerAd"],[5017837,"div#outside-ads"],[6438057,"div#panoramaad"],[1891090,"div#panorama_ad"],[3490367,"div#prebid-ad"],[12134297,"div#reklam,\ntd#reklam"],[13373556,"div#rich-media-ads"],[9796473,"div#schibsted-data-controller-sticky"],[3057131,"div#snow-container[style*=\"z-index: 999999\"]"],[10833932,"div#toppannons"],[7557418,"div#topreklam"],[4343906,"div#zox-lead-bot"],[177509,"div.CMACG_AdChangerWidget"],[16740474,"div.Container--ad"],[14341326,"div.External-ad"],[8302477,"div.I-artiklar-annonser"],[1372121,"div.Takeover-ad"],[9896593,"div.adform-container"],[13634616,"div.adnuntius-ad"],[16493460,"div.adsense-responsive-ad"],[130650,"div.ads-above-post"],[15499885,"div.ads-sticky-container"],[15158548,"div.adtech_slot"],[11134509,"div.advads-background"],[5135152,"div.ad-after-header"],[9970714,"div.ad-after-post"],[4155030,"div.ad-banner"],[8302193,"div.ad-component"],[13456304,"div.ad-container-lg"],[9011898,"div.ad-panorama_dynamic-wrapper"],[2075533,"div.ad-toppbanner"],[8579371,"div.after-article-ad"],[97724,"div.annons-yta"],[7103448,"div.article-ad-container"],[180704,"div.artikelflode-annonser"],[7894150,"div.ashe-preloader-wrap"],[2916228,"div.bam-ad-wrapper"],[7484205,"div.banner-size.proad"],[954822,"div.before-article-ad"],[76158,"div.better-ads-listitemad"],[885957,"div.big-desktop-ads"],[9486935,"div.block-bean-header-banner"],[4015355,"div.borka-ad"],[5179557,"div.box--squareAd"],[10364818,"div.brix-ads-by-posttype"],[11014841,"div.bsa_pro_ajax_load"],[5058392,"div.column-article.tag-annons"],[12948800,"div.comment-ad_wrapper"],[10534013,"div.content-center-ad"],[2192141,"div.content_ad_top"],[2349870,"div.dfp-ads-container"],[16066382,"div.dfp-ads-container-middle"],[10866309,"div.egmont-ads-ad"],[9770222,"div.elementor-widget-wp-widget-adrotate_widgets"],[13765009,"div.feed_ad"],[6460161,"div.flow_ad"],[7510023,"div.fs-holid-live-widescreen"],[9931177,"div.helsida-ad"],[7698437,"div.inner_advertisement"],[6688096,"div.in-feed-ad"],[8866320,"div.in-post-ad-wrap"],[5266394,"div.jeg_ad"],[994173,"div.js-top-banner-container"],[7565748,"div.landscape-ad-space"],[10783875,"div.leeads-wrapper-desktop"],[2237405,"div.link-ads"],[3965900,"div.l-footer__adtext"],[7363625,"div.maaw-ad-slots"],[6506258,"div.medium-ad"],[1099112,"div.mgp-ads"],[8143937,"div.mobile-ad-format"],[5305565,"div.mosaico-ad"],[1900095,"div.navbar-ad-section"],[14781510,"div.novashare-buttons"],[8609308,"div.outsider-ads"],[15645509,"div.o-indenter--ad"],[6527949,"div.panorama-ad"],[2605958,"div.panorama-ad-standard"],[485222,"div.panorama-annonser"],[878864,"div.panorama-banner"],[6921173,"div.partnership-ads"],[15954502,"div.phpbb-ads-center"],[5732329,"div.prebid-ad-slot"],[15588688,"div.sb-egmont-plugin"],[12419342,"div.schibsted-info-sticky"],[5715988,"div.sch-datacontroller--footer"],[12084020,"div.sch-datacontroller--subheader"],[13752985,"div.sgm-ad"],[3299412,"div.sgm-header-start-ad"],[15069926,"div.sgm-large-ad"],[55174,"div.sidebar-annons"],[5104617,"div.sidebar-item .banner-box"],[11338920,"div.strossle-widget"],[5823701,"div.td-a-rec-id-custom-spot"],[3650308,"div.td-banner-bg"],[10453846,"div.topmost-banner"],[15824037,"div.top-advert-wrapper"],[6891157,"div.tower-annonser"],[12429580,"div.uder-tags-ad"],[9897009,"div.view-annons-banner"],[7559576,"div.vue-ad-wrapper"],[684294,"div.widget_widget_dfp"],[11911225,"div.wp-block-ad"],[8058752,"footer .sponsors-area"],[3799976,"iframe#compricer_iframe"],[15451130,"section.bgcolor-ad"],[2221361,"ul.adsmodern"],[9999431,"#RightOuterBannerDiv"],[7467429,"#advisa-iframe"],[5966067,"#ad-fullscreen:not(body):not(html)"],[16537908,"#ad-mega-container:not(body):not(html)"],[14618602,"#ad-wallpaper:not(body):not(html)"],[14904532,"#ad_topScroller:not(body):not(html)"],[12279415,"#annons_head"],[11619812,"#bottomAnnonsBar"],[14902916,"#div-leeadsFullpageAd"],[8175970,"#leeads-panorama-container"],[8830454,"#strossle-below-article-thumbnails"],[11082482,"#topBannerAds"],[10229390,".Teaser--nativeAd:not(body):not(html)"],[9019188,".adContainer:not(body):not(html)"],[637145,".adrotate-group:not(body):not(html)"],[8812174,".adtoma_container:not(body):not(html)"],[7940887,".adtrue-holder:not(body):not(html)"],[8875872,".ad-inside-single-article:not(body):not(html)"],[14542089,".ad-rotator:not(body):not(html)"],[6811294,".ad-single-news:not(body):not(html)"],[12252131,".ad_container_bottom:not(body):not(html)"],[4722515,".annonseArticle:not(body):not(html)"],[97173,".annons_col:not(body):not(html)"],[15872750,".annons_mitten:not(body):not(html)"],[3196721,".annons_panorama:not(body):not(html)"],[7568749,".bannerclick:not(body):not(html)"],[15420235,".b-ad__wrapper:not(body):not(html)"],[9021974,".carrie-ad-block:not(body):not(html)"],[4585392,".casino-ad:not(body):not(html)"],[12249051,".category-annonssamarbete:not(body):not(html)"],[8618236,".category-annons:not(body):not(html)"],[425946,".category-om-samarbeten:not(body):not(html)"],[8385744,".category-samarbeten:not(body):not(html)"],[3260573,".category-sponsrade-inlagg:not(body):not(html)"],[4147035,".category-sponsrade-reklaminlagg:not(body):not(html)"],[3259852,".category-sponsrad-artikel:not(body):not(html)"],[10279767,".category-sponsrad:not(body):not(html),\n.category-sponsrat:not(body):not(html)"],[3243166,".category-sponsrat-content:not(body):not(html)"],[7558646,".category-sponsrat-inlagg:not(body):not(html)"],[13928613,".category-sponsrat-innehall:not(body):not(html)"],[7483090,".component-matchAds:not(body):not(html)"],[1243899,".component-matchAds__content:not(body):not(html)"],[10913194,".c-ad-wrapper:not(body):not(html)"],[622414,".c-ad__floating:not(body):not(html)"],[3706626,".c-dfp_ads:not(body):not(html)"],[6418664,".c-post--native-ad:not(body):not(html)"],[4858774,".dfp-ad-widget-class:not(body):not(html)"],[11129728,".dj-ad-size:not(body):not(html)"],[15934937,".esmg-hb-slot:not(body):not(html)"],[12482740,".favethemes-content-ad-bottom:not(body):not(html)"],[12482732,".favethemes-content-ad-inline:not(body):not(html)"],[6374869,".favethemes-content-ad-top:not(body):not(html)"],[16770867,".footer-ad-wrap:not(body):not(html)"],[12581098,".layerAdContainer:not(body):not(html)"],[14251286,".leeads-advert:not(body):not(html)"],[1037838,".loop-mobile-leeads:not(body):not(html)"],[4360639,".mittenannons:not(body):not(html)"],[6409471,".mobile_ad:not(body):not(html)"],[11554168,".node-sponsored-article:not(body):not(html)"],[72420,".nyhet_wrapper_annons:not(body):not(html)"],[4574715,".o-grid__ad-column:not(body):not(html)"],[972506,".penci-infeed-fullwidth-ads:not(body):not(html)"],[5618037,".plista_widget_outstream:not(body):not(html)"],[2757487,".react-ad:not(body):not(html)"],[12476179,".revive-ad-container:not(body):not(html)"],[6859378,".rmss_main-ad:not(body):not(html)"],[7998147,".sponsorBanner:not(body):not(html)"],[15352291,".sponsrad-artikel:not(body):not(html)"],[11488067,".swp-ad-strossle:not(body):not(html)"],[15579121,".sw-popular__article--ad:not(body):not(html)"],[1972431,".sw-sponsored_post:not(body):not(html)"],[14569690,".sw-tag-sponsored_post:not(body):not(html)"],[5729759,".tag-sponsrat-inlagg:not(body):not(html)"],[12956611,".teaser--native-ad:not(body):not(html)"],[10679288,".thb_ad_header:not(body):not(html)"],[16723478,".topbanner-desktop:not(body):not(html)"],[2092162,".toppannonser:not(body):not(html)"],[4312692,".widget_adonnews:not(body):not(html)"],[13508738,".widget_ev_ad_widget:not(body):not(html),\n.widget_ic_ad_widget:not(body):not(html)"],[8964317,"._ning_outer._ning_jss_zone:not(body):not(html)"]];
const genericExceptionSieve = [8618236,6200301,12249051];
const genericExceptionMap = [["alghundklubben.com",".category-annons:not(body):not(html)"],["cykla.se",".advertisment"],["lesscarbs.se",".category-annonssamarbete:not(body):not(html)"]];

if ( genericSelectorMap ) {
    const map = self.genericSelectorMap =
        self.genericSelectorMap || new Map();
    if ( map.size !== 0 ) {
        for ( const entry of genericSelectorMap ) {
            const before = map.get(entry[0]);
            if ( before === undefined ) {
                map.set(entry[0], entry[1]);
            } else {
                map.set(entry[0], `${before},\n${entry[1]}`);
            }
        }
    } else {
        self.genericSelectorMap = new Map(genericSelectorMap);
    }
    genericSelectorMap.length = 0;
}

if ( genericExceptionSieve ) {
    const hashes = self.genericExceptionSieve =
        self.genericExceptionSieve || new Set();
    if ( hashes.size !== 0 ) {
        for ( const hash of genericExceptionSieve ) {
            hashes.add(hash);
        }
    } else {
        self.genericExceptionSieve = new Set(genericExceptionSieve);
    }
    genericExceptionSieve.length = 0;
}

if ( genericExceptionMap ) {
    const map = self.genericExceptionMap =
        self.genericExceptionMap || new Map();
    if ( map.size !== 0 ) {
        for ( const entry of genericExceptionMap ) {
            const before = map.get(entry[0]);
            if ( before === undefined ) {
                map.set(entry[0], entry[1]);
            } else {
                map.set(entry[0], `${before}\n${entry[1]}`);
            }
        }
    } else {
        self.genericExceptionMap = new Map(genericExceptionMap);
    }
    genericExceptionMap.length = 0;
}

/******************************************************************************/

})();

/******************************************************************************/
