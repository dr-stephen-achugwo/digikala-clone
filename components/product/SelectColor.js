import { setTempColor } from 'store'
import { useDispatch, useSelector } from 'react-redux'

import { Icons } from 'components'

export default function SelectColor(props) {
  //? Props
  const { colors } = props

  //? Assets
  const dispatch = useDispatch()

  //? Store
  const { tempColor } = useSelector((state) => state.cart)

  //? Render(s)
  return (
    <section className=''>
      <div className='flex justify-between p-4'>
        <span className='text-sm text-gray-700'>رنگ: {tempColor?.name}</span>
        <span className='text-sm farsi-digits'>{colors.length} رنگ</span>
      </div>
      <div className='flex flex-wrap gap-3 px-5 my-3'>
        {colors.map((item) => (
          <button
            type='button'
            key={item.id}
            onClick={() => dispatch(setTempColor(item))}
            className={` rounded-2xl py-1 px-1.5 flex items-center cursor-pointer  ${
              tempColor?.id === item.id
                ? 'border-2 border-sky-500'
                : ' border-2 border-gray-300'
            }`}
          >
            <span
              className='inline-block w-5 h-5 ml-3 shadow rounded-xl'
              style={{ background: item.hashCode }}
            >
              {tempColor?.id === item.id && (
                <Icons.Check
                  className={`h-5 w-5 ${
                    item.hashCode === '#ffffff'
                      ? 'text-gray-600'
                      : item.hashCode === '#000000'
                      ? 'text-gray-200'
                      : 'text-white'
                  } `}
                />
              )}
            </span>
            <span>{item.name}</span>
          </button>
        ))}
      </div>
      <div className='section-divide-y' />
    </section>
  )
}
