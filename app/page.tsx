'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/forms/Input'
import SelectInput from '@/components/ui/forms/SelectInput'
import Checkbox from '@/components/ui/forms/Checkbox'
import RadioInput from '@/components/ui/forms/RadioInput'
import Textarea from '@/components/ui/forms/Textarea'
import { SkeletonCard } from '@/components/ui/skeletons'
import { LoaderText } from '@/components/ui/loaders'
import { useToast } from '@/hooks/useToast'
import { useModal } from '@/providers/ModalProvider'

export default function ShowcasePage() {
  /* local state for form demo */
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    accept: false,
    newsletter: 'true',
    notes: ''
  })

  const { showSuccessToast } = useToast()
  const { openModal } = useModal()

  const handleSubmit = () => {
    showSuccessToast('Form submitted!')
  }

  return (
    <main className='mx-auto max-w-3xl space-y-8 p-6'>
      {/*  Buttons  */}
      <section className='space-x-4'>
        <Button variant='primary'>Primary</Button>
        <Button variant='secondary'>Secondary</Button>
        <Button
          variant='danger'
          onClick={() =>
            openModal(
              <div className='space-y-4'>
                <h2 className='text-lg font-semibold'>Modal title</h2>
                <p className='text-sm'>
                  This is a demo modal opened via <code>useModal()</code>.
                </p>
                <Button
                  variant='primary'
                  onClick={() => openModal(null)}
                >
                  Close
                </Button>
              </div>
            )
          }
        >
          Open Modal
        </Button>
      </section>

      {/*  Card + Skeleton  */}
      <Card className='space-y-4'>
        <h2 className='text-lg font-semibold'>Example Card</h2>
        <SkeletonCard />
      </Card>

      {/*  Simple form  */}
      <Card className='space-y-6'>
        <h2 className='text-lg font-semibold'>Example Form</h2>

        <Input
          label='Name'
          value={formData.name}
          onChange={(v) => setFormData({ ...formData, name: v })}
        />

        <SelectInput
          label='Country'
          value={formData.country}
          onChange={(e) =>
            setFormData({ ...formData, country: e.target.value })
          }
          options={{ Germany: 'DE', Nigeria: 'NG', USA: 'US' }}
        />

        <Checkbox
          id='accept'
          label='I accept the terms'
          value={formData.accept}
          onChange={(v) => setFormData({ ...formData, accept: v })}
        />

        <RadioInput
          id='newsletter'
          title='Receive newsletter?'
          type='TRUE/FALSE'
          value={formData.newsletter}
          onChange={(v) =>
            setFormData({ ...formData, newsletter: v.toString() })
          }
        />

        <Textarea
          label='Notes'
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
        />

        <div className='flex justify-end'>
          <Button
            variant='primary'
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </Card>

      {/*  Loader  */}
      <div className='flex items-center justify-center'>
        <LoaderText label='Loading demo...' />
      </div>
    </main>
  )
}
