import { Achievement } from '@/entities/achievement'
import { AchievementCard } from '@/entities/achievement/ui'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { Button } from '@/shared/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface AchievementsCarouselProps {
  achievements: Achievement[]
}

export function AchievementsCarousel({ achievements }: AchievementsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
    dragFree: false,
  })

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])
  
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])
  
  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  const onInit = useCallback(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onInit()
    onSelect()
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)

    return () => {
      emblaApi.off('reInit', onInit)
      emblaApi.off('reInit', onSelect)
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onInit, onSelect])

  return (
    <div className="relative px-8 sm:px-12 md:px-16">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 sm:gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_calc(50%-1.5rem)] lg:flex-[0_0_calc(33.333%-1rem)]"
            >
              <AchievementCard achievement={achievement} index={index} />
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon-sm"
        className="absolute left-0 top-1/2 z-10 size-7 -translate-y-1/2 shadow-lg transition-all hover:scale-110 disabled:opacity-30 disabled:hover:scale-100 sm:size-9"
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
        aria-label="Previous slide"
      >
        <ChevronLeft className="size-4 sm:size-5" />
      </Button>
      
      <Button
        variant="outline"
        size="icon-sm"
        className="absolute right-0 top-1/2 z-10 size-7 -translate-y-1/2 shadow-lg transition-all hover:scale-110 disabled:opacity-30 disabled:hover:scale-100 sm:size-9"
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
        aria-label="Next slide"
      >
        <ChevronRight className="size-4 sm:size-5" />
      </Button>

      {scrollSnaps.length > 1 && (
        <div className="mt-6 flex justify-center gap-1.5 sm:mt-8 sm:gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`h-1.5 rounded-full transition-all sm:h-2 ${
                index === selectedIndex
                  ? 'w-6 bg-primary sm:w-8'
                  : 'w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50 sm:w-2'
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}