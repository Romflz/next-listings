'use client'

type FormData = {
  email: string
  password: string
  confirmPassword?: string
}

type FieldErrors = {
  email?: string
  password?: string
  confirmPassword?: string
}

type ValidationResult = { success: true } | { success: false; errors: FieldErrors }

type ValidateForm = (formData: FormData, loginMode?: boolean) => ValidationResult

export const validateLoginRegisterForm: ValidateForm = (formData, loginMode = true) => {
  const errors: FieldErrors = {}
  const email = formData.email?.trim()
  const password = formData.password ?? ''
  const confirmPassword = formData.confirmPassword ?? ''

  // Basic presence + format checks
  if (!email) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Enter a valid email address'
  }

  if (!password) {
    errors.password = 'Password is required'
  }

  // Extra checks only when NOT in login mode (e.g., signup)
  if (loginMode === false) {
    if (password && password.length < 6) {
      errors.password = 'Password must be at least 6 characters'
    }
    if (password && confirmPassword && password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match'
    }
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors }
  }

  return { success: true }
}
