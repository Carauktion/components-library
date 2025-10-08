import { useEffect, useState } from 'react'
import type { FC } from 'react'

import Arrow, { ArrowType } from '../../Arrow/Arrow'
import TextInput from '../../TextInput/TextInput'

type Props = {
  pagesAmount?: number
  currentPage: number
  onPageChange: (page: number) => void
}

const Pagination: FC<Props> = ({
  pagesAmount = 1,
  currentPage,
  onPageChange,
}) => {
  const [pageInputValue, setPageInputValue] = useState(currentPage)

  useEffect(() => {
    setPageInputValue(currentPage)
  }, [currentPage])

  return (
    <div className="flex items-center justify-center gap-[20px]">
      <Arrow
        onClick={() => onPageChange(1)}
        arrowType={ArrowType.Pagination}
        disabled={currentPage <= 1}
      />
      <Arrow
        className="rotate-90"
        onClick={() =>
          currentPage === 1 ? null : onPageChange(currentPage - 1)
        }
        arrowType={ArrowType.Small}
        disabled={currentPage <= 1}
      />
      <div className="flex items-center justify-center gap-[10px]">
        <TextInput
          className={`${pagesAmount > 1000 ? 'w-[62px]' : 'w-[48px]'} h-[37px]`}
          inputClassName="text-[14px] !px-[0px] text-center"
          name="currentPage"
          value={pageInputValue.toString()}
          disabled={pagesAmount <= 1}
          onChange={(e) => setPageInputValue(+e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && onPageChange(pageInputValue)}
        />
        <p className="text-[14px]">of {pagesAmount ? pagesAmount : 0}</p>
      </div>
      <Arrow
        className="-rotate-90"
        onClick={() =>
          currentPage === pagesAmount ? null : onPageChange(currentPage + 1)
        }
        arrowType={ArrowType.Small}
        disabled={currentPage >= pagesAmount}
      />
      <Arrow
        className="rotate-180"
        onClick={() => pagesAmount && onPageChange(pagesAmount)}
        arrowType={ArrowType.Pagination}
        disabled={currentPage >= pagesAmount}
      />
    </div>
  )
}

export default Pagination
