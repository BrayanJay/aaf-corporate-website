import React from 'react'
import SubTitle from '../../../components/careers/SubTitle'
import FormSection from '../../../components/careers/FormSection'

const ApplicationForm = () => {
  return (
    <div className="min-h-screen flex flex-col">
    <header className="flex-shrink-0">
      <SubTitle />
    </header>
    <main className="flex-grow">
      <FormSection />
    </main>
  </div>
  )
}

export default ApplicationForm
