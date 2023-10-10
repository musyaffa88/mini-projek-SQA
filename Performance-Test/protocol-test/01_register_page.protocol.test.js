import { check, group } from 'k6'
import http from 'k6/http'
import { Trend } from 'k6/metrics'

import { headers } from '../config/headers.js'

const pageDuration = new Trend('page_register_duration', true)

export default function () {
	group('01_register_page', function () {
		const responses = http.batch([
            ['GET','https://magento.softwaretestingboard.com/customer/account/create/', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/calendar.css', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/css/styles-m.css', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/css/styles-l.css', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/requirejs/require.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/requirejs/mixins.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/requirejs-config.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/polyfill.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/fonts/opensans/light/opensans-300.woff2', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/fonts/opensans/regular/opensans-400.woff2', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/fonts/opensans/semibold/opensans-600.woff2', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/fonts/opensans/bold/opensans-700.woff2', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/fonts/Luma-Icons.woff2', headers],
			['GET','https://magento.softwaretestingboard.com/pub/media/styles.css', headers],
			['GET','https://magento.softwaretestingboard.com/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/images/logo.svg', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/css/print.css', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/jquery/jquery.mobile.custom.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/common.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/dataPost.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/bootstrap.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/jquery.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/translate-inline.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Translation/js/mage-translation-dictionary.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Theme/js/responsive.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Theme/js/theme.js', headers],
			['GET','https://connect.facebook.net/en_US/fbevents.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/mage.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/jquery/patches/jquery.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/requirejs/domReady.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/template.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/modal/confirm.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/jquery/ui-modules/widget.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/apply/main.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/knockout/bootstrap.js', headers],
			['GET','https://connect.facebook.net/signals/config/1248743922444648?v=2.9.132&r=stable&domain=magento.softwaretestingboard.com', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/requirejs/text.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/jquery/ui-modules/dialog.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/translate.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/jquery/jquery-migrate.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/tabs.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/smart-keyboard-handler.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/ie-class-fixer.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/underscore.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/modal/modal.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/js-translation.json', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/matchMedia.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/knockoutjs/knockout.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/knockoutjs/knockout-es5.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/jquery/ui-modules/button.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/jquery/ui-modules/draggable.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/jquery/ui-modules/position.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/jquery/ui-modules/resizable.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/apply/scripts.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/knockout/template/engine.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/knockout/bindings/bootstrap.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/knockout/extender/observable_array.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/knockout/extender/bound-nodes.js', headers],
			['GET','https://www.facebook.com/tr/?id=1248743922444648&ev=PageView&dl=https%3A%2F%2Fmagento.softwaretestingboard.com%2Fcustomer%2Faccount%2Fcreate%2F&rl=https%3A%2F%2Fmagento.softwaretestingboard.com%2Fargus-all-weather-tank.html&if=false&ts=1696934139925&sw=1366&sh=768&v=2.9.132&r=stable&ec=0&o=30&fbp=fb.1.1696493267824.1732194392&ler=empty&it=1696934139445&coo=false&exp=a1&rqm=GET', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/jquery/ui-modules/core.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/collapsible.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-slide.html', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-custom.html', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/key-codes.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/jquery/ui-modules/mouse.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/validation/validation.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/knockout/template/observable_source.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/knockout/template/renderer.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/logger/console-logger.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/knockoutjs/knockout-repeat.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/knockoutjs/knockout-fast-foreach.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/knockout/bindings/resizable.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/knockout/bindings/i18n.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/knockout/bindings/scope.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/knockout/bindings/range.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/knockout/bindings/mage-init.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/knockout/bindings/keyboard.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/knockout/bindings/optgroup.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/knockout/bindings/after-render.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/knockout/bindings/autoselect.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/knockout/bindings/datepicker.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/knockout/bindings/outer_click.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/knockout/bindings/fadeVisible.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/knockout/bindings/collapsible.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/knockout/bindings/staticChecked.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/knockout/bindings/simple-checked.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/knockout/bindings/bind-html.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/knockout/bindings/tooltip.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/knockout/bindings/color-picker.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/utils/wrapper.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/core/events.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/es6-collections.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Cookie/js/jquery.storageapi.extended.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/validation.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/core/class.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/core/storage/local.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/knockout/template/loader.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/logger/logger.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/logger/entry-factory.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/logger/console-output-handler.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/logger/formatter.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/logger/message-pool.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/logger/levels-pool.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/logger/logger-utils.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/view/utils/async.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/registry/registry.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/utils/main.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/jquery/ui-modules/slider.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/calendar.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/moment.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/tooltip/tooltip.html', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/jquery/spectrum/spectrum.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/jquery/spectrum/tinycolor.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/jquery/jquery.cookie.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/jquery/jquery.storageapi.min.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/jquery/jquery.validate.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/utils/template.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/logger/entry.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/view/utils/dom-observer.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/view/utils/bindings.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/utils/arrays.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/utils/compare.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/utils/misc.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/utils/objects.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/utils/strings.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/jquery/ui-modules/datepicker.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/jquery/ui-modules/timepicker.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/jquery/jquery.metadata.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/MutationObserver.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/FormData.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/loader.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_PageCache/js/page-cache.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Cookie/js/require-cookie.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/core/app.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/dropdown.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Search/js/form-mini.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/menu.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/trim-input.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Customer/js/password-strength-indicator.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_GoogleAnalytics/js/google-analytics.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/cookies.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/block-loader.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Customer/js/section-config.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Customer/js/invalidation-processor.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Customer/js/block-submit-on-send.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Customer/js/customer-data.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Persistent/js/view/customer-data-mixin.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/modal/alert.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/core/renderer/types.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/core/renderer/layout.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/jquery/ui-modules/menu.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Customer/js/zxcvbn.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/core/element/element.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/block-loader.html', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/url.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/storage.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Checkout/js/view/minicart.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/core/collection.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Tax/js/view/checkout/minicart/subtotal/totals.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Msrp/js/view/checkout/minicart/subtotal/totals.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Catalog/js/view/image.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Catalog/js/view/compare-products.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Customer/js/view/authentication-popup.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Captcha/js/view/checkout/loginCaptcha.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Customer/js/view/customer.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Theme/js/view/messages.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Catalog/js/storage-manager.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/view/messages.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/MSP_ReCaptcha/js/ui-messages-mixin.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/core/element/links.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Checkout/js/sidebar.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/images/loader-1.gif', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/decorate.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/form/form.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Customer/js/action/login.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Customer/js/model/authentication-popup.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Captcha/js/view/checkout/defaultCaptcha.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Captcha/js/model/captchaList.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Security/js/escaper.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Catalog/js/product/storage/storage-service.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/MSP_ReCaptcha/js/registry.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/jquery/ui-modules/effect-blind.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/model/messageList.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Customer/js/invalidation-rules/website-rule.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/jquery/ui-modules/effect-fade.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/lib/spinner.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/mage/requirejs/resolver.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/jquery/ui-modules/effect.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Captcha/js/model/captcha.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Catalog/js/product/storage/ids-storage.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Catalog/js/product/storage/data-storage.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Catalog/js/product/storage/ids-storage-compare.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/form/adapter.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/model/messages.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Captcha/js/action/refresh.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Checkout/template/minicart/content.html', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Catalog/js/product/query-builder.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/js/form/adapter/buttons.js', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Customer/template/authentication-popup.html', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/template/messages.html', headers],
			['GET','https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Captcha/template/checkout/captcha.html', headers],
        ])

		for (const res of responses) {
			pageDuration.add(res.timings.duration)

			check(res, {
				'status 200': r => r.status === 200
			})
		}
	})
}