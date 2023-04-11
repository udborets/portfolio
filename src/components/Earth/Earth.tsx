import EarthCanvas from '@/components/EarthCanvas/EarthCanvas'

const Earth = () => {
  return (
    <div className="earth h-[300px] w-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] relative flex">
      <EarthCanvas />
    </div>
  )
}

export default Earth