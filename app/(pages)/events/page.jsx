"use client"
import { FilterIcon, SearchIcon } from "@/app/components/Icons";
import PaginationComp from "@/app/components/PaginationComp";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import { TbArrowsTransferUp } from "react-icons/tb";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";


const Events = () => {
  const [searchVal, setSearchVal] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [reversed, setReversed] = useState(false);
  const [data, setData] = useState([
    {
      id: 0,
      name: 'Apple MacBook Pro 17',
      color: 'Silver',
      category: 'Laptop',
      price: '$189	'
    },
    {
      id: 1,
      name: 'Microsoft Surface Pro',
      color: 'Blue',
      category: 'Laptop PC',
      price: '$99	'
    },
    {
      id: 2,
      name: 'Magic Mouse 2',
      color: 'Silver',
      category: 'Accessories',
      price: '$9	'
    }, {
      id: 3,
      name: 'Apple Watch	',
      color: 'Blue',
      category: 'Watches',
      price: '$212'
    }, {
      id: 4,
      name: 'Apple iMac',
      color: 'Black',
      category: 'PC',
      price: '$99'
    }, {
      id: 5,
      name: 'Apple AirPods',
      color: 'Silver',
      category: 'Accessories',
      price: '$29'
    }, {
      id: 6,
      name: 'iPad Pro	',
      color: 'Gold',
      category: 'Tablet',
      price: '$2999'
    }, {
      id: 7,
      name: 'Magic Keyboard',
      color: 'Black',
      category: 'Laptop',
      price: '$2999'
    }, {
      id: 8,
      name: 'Smart Folio iPad Air',
      color: 'Silver',
      category: 'Accessories',
      price: '$2199'
    }, {
      id: 9,
      name: 'AirTag',
      color: 'Gold',
      category: 'Accessories',
      price: '$199'
    }, {
      id: 10,
      name: 'Appleeee MacBook Pro 17',
      color: 'White',
      category: 'Laptop with white',
      price: '$299'
    }
  ])

  const header = [
    "",
    "",
    'نام محصول',
    'رنگ',
    'دسته بندی',
    'قیمت',
    'عملیات'
  ]

  // const data = 

  const handleClickFilter = (index) => {
    if (index === 0) {
      onOpen();
    }
    if (index === 1) {
      B
    }
    if (index === 2) {
      C
    }
    if (index === 3) {
      D
    }
  }


  const handleClickModal = () => {
    if (reversed) {
      const newData = [...data].reverse();
      setData(newData);
    } else {
      const newData = [...data].reverse();  
      setData(newData);
    }
  }

  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-5">
      <div className="max-w-80 mb-5">
        <Input
          label="جستجو"
          isClearable
          radius="lg"
          onChange={(e) => setSearchVal(e.target.value)}
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "bg-default-200/50",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "group-data-[focus=true]:bg-default-200/50",
              "dark:group-data-[focus=true]:bg-default/60",
              "!cursor-text",
            ]
          }}
          placeholder="جستجو بر اساس نام محصول..."
          startContent={
            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
        />
      </div>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {/* <th scope="col" class="p-4">
              <div class="flex items-center">
                <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="checkbox-all-search" class="sr-only">checkbox</label>
              </div>
            </th> */}
            {
              header.map((item, index) => (
                <th key={index} scope="col" class="px-6 py-3">
                  <div className="flex items-center gap-2">
                    {item}

                    {(index !== 1 && index !== header.length - 1) && <FilterIcon onClick={() => handleClickFilter(index)} />}

                    {/* <div className={`absolute ${openModal ? 'flex' : 'hidden'} top-0 right-0 w-[320px] h-[140px] bg-white rounded-lg`}></div> */}

                  </div>
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>

          {searchVal && (
            data.filter((row) =>
              !searchVal.length || row.name
                .toString()
                .toLowerCase()
                .includes(searchVal.toString().toLowerCase())
            ).map((item, index) => (
              <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                  {item.id + 1}
                </td>
                <td class="w-4 p-4">
                  <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                  </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.name}
                </th>
                <td class="px-6 py-4">
                  {item.color}
                </td>
                <td class="px-6 py-4">
                  {item.category}
                </td>
                <td class="px-6 py-4">
                  {item.price}
                </td>
                <td class="px-6 py-4">
                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">ویرایش</a>
                </td>
              </tr>
            ))
          )}

          {!searchVal && data.map((item, index) => (
            <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                </div>
              </td>
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.name}
              </th>
              <td class="px-6 py-4">
                {item.color}
              </td>
              <td class="px-6 py-4">
                {item.category}
              </td>
              <td class="px-6 py-4">
                {item.price}
              </td>
              <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">ویرایش</a>
              </td>
            </tr>
          ))}


        </tbody>
      </table>
      <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
        <span dir="rtl" class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">رکورد <span class="font-semibold text-gray-900 dark:text-white">1-10</span> از <span class="font-semibold text-gray-900 dark:text-white">1000</span></span>

        <PaginationComp />

        {/* <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
          </li>
          <li>
            <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
          </li>
          <li>
            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
          </li>
        </ul> */}
      </nav>


      {/* Modal */}
      <Modal
        size="sm"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent>
          {(onClose) => (
            <>
              {/* <ModalHeader className="h-[50px]">فیلتر بر اساس صعودی، نزولی</ModalHeader> */}
              <ModalBody className="p-4">
                <p className="mb-3">مرتب سازی بر اساس صعودی، نزولی</p>
                <div className="flex items-center gap-3">
                  <Checkbox size="md" onChange={() => setReversed(false)}>اولین ریکورد</Checkbox>
                  <Checkbox size="md" onChange={() => setReversed(true)}>آخرین ریکورد</Checkbox>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  کنسل
                </Button>
                <Button color="primary" onPress={onClose} onClick={handleClickModal}>
                  اعمال
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>

  )
}

export default Events