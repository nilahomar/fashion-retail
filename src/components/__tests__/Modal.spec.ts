import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import modal from '../Modal.vue'

describe('Modal', () => {

  const product = {
    id: '111902',
    gallery: [
      {
        alt: 'Hemd',
        title: 'Hemd',
        src: 'https://media.soliver.com/i/soliver/2143240.31N2_front',
        type: 'front'
      },
      {
        alt: 'Hemd 2',
        title: 'Hemd 2',
        src: 'https://media.soliver.com/i/soliver/2143240.31N2_front',
        type: 'back'
      }
    ],
    name: 'Brand New',
    category: 'Hemd',
    sizes: [
      {
        value: 'S',
        key: 'size',
        label: 'S'
      },
      {
        value: 'M',
        key: 'size',
        label: 'M'
      }
    ],
    colors: [
      {
        value: '31N2',
        key: 'color',
        label: 'Chilirot',
        colorBase: 'chilirot',
        swatchImagesLinks: {
          flat: 'https://media.soliver.com/i/soliver/2143240.31N2_flat?w=80&fmt=auto&qlt=default&fmt.jp2.qlt=40&fmt.webp.qlt=70',
          fa: 'https://media.soliver.com/i/soliver/2143240.31N2_FA?w=40&fmt=auto&qlt=default&fmt.jp2.qlt=40&fmt.webp.qlt=70'
        }
      },
      {
        value: '31N1',
        key: 'color',
        label: 'Chiligreen',
        colorBase: 'Chiligreen',
        swatchImagesLinks: {
          flat: 'https://media.soliver.com/i/soliver/2143240.31N2_flat?w=80&fmt=auto&qlt=default&fmt.jp2.qlt=40&fmt.webp.qlt=70',
          fa: 'https://media.soliver.com/i/soliver/2143240.31N2_FA?w=40&fmt=auto&qlt=default&fmt.jp2.qlt=40&fmt.webp.qlt=70'
        }
      }
    ],
    prices: [
      {
        currencyCode: 'EUR',
        regular: 39.99
      },
      {
        currencyCode: 'EUR',
        regular: 49.99
      }
    ],
    type: 'VARIATION_MASTER',
    referenceKey: '2139663.31N3',
    shortDescription: 'Relaxed: Overshirt aus Baumwolle',
    description:
      '<ul><li>Collar : shirt collar</li><li>Closure: button placket</li><li>Sleeves : with cuffs</li><li>Style : casual look</li><li>Occasion : Casual</li></ul> <div class="mt-4"><p>EAN: 4099974159377</p><p>Item number: 2139651.59W1.5XL</p></div>',
    fitDescription:
      '<ul><li>Fit : regular fit</li><li>Back length : for size XXL approx. 83 cm</li></ul>',
    materialDescription:
      '<p class="font-bold mb-2">Material</p><div><ul><li>Fabric: chambray</li><li>Quality: lightweight</li></ul></div><p/><div><ul><li>99% Cotton, 1% Elastane</li></ul></div>',
    careInstructions:
      '<ul class="flex flex-col gap-2"><li>Machine wash 40</li><li>Do not chlore</li><li>Handwarm ironing</li></ul><ul class="flex flex-col gap-2"><li>No dry cleaning</li><li>Tumble with reduced thermical pressure</li></ul>',
    sustainabilityInstructions:
      '<p class="mb-4">WE CARE: Items with other sustainable properties that go beyond our minimum standards are marked with the WE CARE label.</p><div class="w-full border-t" /><div class="mt-4"><p class="mb-4 font-bold uppercase">Certified sustainable Fibre</p><p class="mb-4">When it comes to certified sustainable fibres, we\'re committed to using natural fibres from renewable sources. The raw materials are cultivated via resource-saving methods.</p><div class="text-xs"><p>This product supports economically, ecologically and socially sustainable cotton farming.</p><p cl>The sourcing of sustainable cotton follows the principle of massbalance. You can find more information here.</p></div></div>',
    properties: {}
  }

  it('renders Product Price properly', () => {
    const wrapper = mount(modal, { props: { product: product, currentPrice: '10' } })
    const priceElement = wrapper.find('p.price')
    expect(priceElement.text()).contains("10")
  });

  it('renders Product Name properly', () => {
    const wrapper = mount(modal, { props: { product: product, currentPrice: '10' } })
    const priceElement = wrapper.find('p.name')
    expect(priceElement.text()).contains("Brand New")
  });

  it('render Updated Color', async () => {
    const wrapper = mount(modal, { props: { product: product, currentPrice: '10', currentColor: ""}})
    const lastElement = wrapper.findAll('.color-item')[1]

    await lastElement.trigger('click')

    const colorElement = wrapper.find('p.color')
    expect(colorElement.text()).contains("Color: Chiligreen")
  });

  it('render Updated Size', async () => {
    const wrapper = mount(modal, { props: { product: product, currentPrice: '10', currentSize: ""}})
    const lastElement = wrapper.findAll('.size-item')[1]

    await lastElement.trigger('click')

    const sizeElement = wrapper.find('p.size')
    expect(sizeElement.text()).contains("Size: M")
  });

  it('changes the current image when goToSlide is called', async () => {
    const wrapper = mount(modal, { props: { product: product, currentPrice: '10', currentSize: ""}})


  });

})
