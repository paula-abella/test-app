import { shallowMount } from "@vue/test-utils";
import AsideLayout from "@/components/aside-layout.vue";

describe("AsideLayout", () => {

  it("renders aside layout container", () => {
    const wrapper = shallowMount(AsideLayout, {
      stubs: ['sm-container'],
    });

    expect(wrapper.find('.layout').exists()).toBe(true);
    expect(wrapper.find('.layout__aside').exists()).toBe(true);
    expect(wrapper.find('.layout__content').exists()).toBe(true);
  });

});
