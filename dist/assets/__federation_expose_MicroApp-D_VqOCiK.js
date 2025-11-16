import { importShared } from './__federation_fn_import-1Ztatw5a.js';
import Button from './__federation_expose_Button-CoCUklmq.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-pcqpp-6-.js';

const {createElementVNode:_createElementVNode,createTextVNode:_createTextVNode,withCtx:_withCtx,createVNode:_createVNode,toDisplayString:_toDisplayString,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');


const _hoisted_1 = { class: "micro-app-1" };
const _hoisted_2 = { class: "content" };
const _hoisted_3 = { class: "demo-section" };
const _hoisted_4 = { class: "button-grid" };
const _hoisted_5 = { class: "info-section" };
const _hoisted_6 = { class: "stats" };
const _hoisted_7 = { class: "stat-card" };
const _hoisted_8 = { class: "stat-value" };

const {ref} = await importShared('vue');


const _sfc_main = {
  __name: 'MicroApp',
  setup(__props) {

const clickCount = ref(0);

const handleClick = (type) => {
  clickCount.value++;
  console.log(`${type} button clicked! Total clicks: ${clickCount.value}`);
};

return (_ctx, _cache) => {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _cache[10] || (_cache[10] = _createElementVNode("div", { class: "header" }, [
      _createElementVNode("h2", null, "Microfrontend 1"),
      _createElementVNode("p", null, "Interactive Button Component")
    ], -1)),
    _createElementVNode("div", _hoisted_2, [
      _createElementVNode("div", _hoisted_3, [
        _cache[6] || (_cache[6] = _createElementVNode("h3", null, "Button Examples", -1)),
        _createElementVNode("div", _hoisted_4, [
          _createVNode(Button, {
            onClick: _cache[0] || (_cache[0] = $event => (handleClick('Primary')))
          }, {
            default: _withCtx(() => [...(_cache[3] || (_cache[3] = [
              _createTextVNode(" Primary Button ", -1)
            ]))]),
            _: 1
          }),
          _createVNode(Button, {
            onClick: _cache[1] || (_cache[1] = $event => (handleClick('Secondary')))
          }, {
            default: _withCtx(() => [...(_cache[4] || (_cache[4] = [
              _createTextVNode(" Secondary Button ", -1)
            ]))]),
            _: 1
          }),
          _createVNode(Button, {
            onClick: _cache[2] || (_cache[2] = $event => (handleClick('Success')))
          }, {
            default: _withCtx(() => [...(_cache[5] || (_cache[5] = [
              _createTextVNode(" Success Button ", -1)
            ]))]),
            _: 1
          })
        ])
      ]),
      _createElementVNode("div", _hoisted_5, [
        _cache[8] || (_cache[8] = _createElementVNode("h3", null, "About This Microfrontend", -1)),
        _cache[9] || (_cache[9] = _createElementVNode("p", null, " This is Microfrontend 1, which provides reusable button components. It demonstrates module federation capabilities with Vue 3. ", -1)),
        _createElementVNode("div", _hoisted_6, [
          _createElementVNode("div", _hoisted_7, [
            _createElementVNode("span", _hoisted_8, _toDisplayString(clickCount.value), 1),
            _cache[7] || (_cache[7] = _createElementVNode("span", { class: "stat-label" }, "Button Clicks", -1))
          ])
        ])
      ])
    ])
  ]))
}
}

};
const MicroApp = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-3b13262a"]]);

export { MicroApp as default };
