import { importShared } from './__federation_fn_import-1Ztatw5a.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-pcqpp-6-.js';

const {renderSlot:_renderSlot,createTextVNode:_createTextVNode,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');





const _sfc_main = {
  __name: 'Button',
  props: {
  variant: {
    type: String,
    default: 'primary'
  }
},
  emits: ['click'],
  setup(__props, { emit: __emit }) {



const emit = __emit;

const handleClick = () => {
  emit('click');
  console.log('Button from Microfrontend 1 clicked!');
};

return (_ctx, _cache) => {
  return (_openBlock(), _createElementBlock("button", {
    class: "custom-button",
    onClick: handleClick
  }, [
    _renderSlot(_ctx.$slots, "default", {}, () => [
      _cache[0] || (_cache[0] = _createTextVNode("Click me", -1))
    ], true)
  ]))
}
}

};
const Button = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-1b3fa1d9"]]);

export { Button as default };
