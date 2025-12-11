'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  FiSave,
  FiPlus,
  FiTrash2,
  FiEdit2,
  FiX,
  FiUser,
  FiBriefcase,
  FiBook,
  FiCode,
  FiFolder,
} from 'react-icons/fi'

interface PortfolioData {
  personal: any
  social: any
  experience: any[]
  education: any[]
  skills: any[]
  projects: any[]
}

export default function AdminPage() {
  const [data, setData] = useState<PortfolioData | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [activeTab, setActiveTab] = useState('personal')
  const [editingItem, setEditingItem] = useState<string | null>(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch('/api/portfolio')
      const portfolioData = await response.json()
      setData(portfolioData)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const saveData = async () => {
    if (!data) return
    
    setSaving(true)
    try {
      const response = await fetch('/api/portfolio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        alert('Portfolio data saved successfully!')
        // Reload the page to see changes
        window.location.reload()
      } else {
        alert('Failed to save data')
      }
    } catch (error) {
      console.error('Error saving data:', error)
      alert('Error saving data')
    } finally {
      setSaving(false)
    }
  }

  const updatePersonal = (field: string, value: string) => {
    if (!data) return
    setData({
      ...data,
      personal: {
        ...data.personal,
        [field]: value,
      },
    })
  }

  const updateSocial = (field: string, value: string) => {
    if (!data) return
    setData({
      ...data,
      social: {
        ...data.social,
        [field]: value,
      },
    })
  }

  const addExperience = () => {
    if (!data) return
    const newExp = {
      id: Date.now().toString(),
      company: '',
      position: '',
      period: '',
      type: 'Full-time',
      description: '',
      responsibilities: [],
    }
    setData({
      ...data,
      experience: [...data.experience, newExp],
    })
    setEditingItem(newExp.id)
  }

  const updateExperience = (id: string, field: string, value: any) => {
    if (!data) return
    setData({
      ...data,
      experience: data.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    })
  }

  const deleteExperience = (id: string) => {
    if (!data) return
    if (confirm('Are you sure you want to delete this experience?')) {
      setData({
        ...data,
        experience: data.experience.filter((exp) => exp.id !== id),
      })
    }
  }

  const addEducation = () => {
    if (!data) return
    const newEdu = {
      id: Date.now().toString(),
      degree: '',
      institution: '',
      type: 'University',
      iconName: 'award',
    }
    setData({
      ...data,
      education: [...data.education, newEdu],
    })
    setEditingItem(newEdu.id)
  }

  const updateEducation = (id: string, field: string, value: any) => {
    if (!data) return
    setData({
      ...data,
      education: data.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    })
  }

  const deleteEducation = (id: string) => {
    if (!data) return
    if (confirm('Are you sure you want to delete this education?')) {
      setData({
        ...data,
        education: data.education.filter((edu) => edu.id !== id),
      })
    }
  }

  const addSkill = () => {
    if (!data) return
    const newSkill = {
      id: Date.now().toString(),
      name: '',
      level: 50,
      iconName: 'code',
    }
    setData({
      ...data,
      skills: [...data.skills, newSkill],
    })
    setEditingItem(newSkill.id)
  }

  const updateSkill = (id: string, field: string, value: any) => {
    if (!data) return
    setData({
      ...data,
      skills: data.skills.map((skill) =>
        skill.id === id ? { ...skill, [field]: value } : skill
      ),
    })
  }

  const deleteSkill = (id: string) => {
    if (!data) return
    if (confirm('Are you sure you want to delete this skill?')) {
      setData({
        ...data,
        skills: data.skills.filter((skill) => skill.id !== id),
      })
    }
  }

  const addProject = () => {
    if (!data) return
    const newProject = {
      id: Date.now().toString(),
      title: '',
      company: '',
      description: '',
      image: '📱',
      tags: [],
      featured: false,
    }
    setData({
      ...data,
      projects: [...data.projects, newProject],
    })
    setEditingItem(newProject.id)
  }

  const updateProject = (id: string, field: string, value: any) => {
    if (!data) return
    setData({
      ...data,
      projects: data.projects.map((project) =>
        project.id === id ? { ...project, [field]: value } : project
      ),
    })
  }

  const deleteProject = (id: string) => {
    if (!data) return
    if (confirm('Are you sure you want to delete this project?')) {
      setData({
        ...data,
        projects: data.projects.filter((project) => project.id !== id),
      })
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-500">Failed to load data</div>
      </div>
    )
  }

  const tabs = [
    { id: 'personal', label: 'Personal Info', icon: FiUser },
    { id: 'experience', label: 'Experience', icon: FiBriefcase },
    { id: 'education', label: 'Education', icon: FiBook },
    { id: 'skills', label: 'Skills', icon: FiCode },
    { id: 'projects', label: 'Projects', icon: FiFolder },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Portfolio Admin Dashboard
            </h1>
            <motion.button
              onClick={saveData}
              disabled={saving}
              className="px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold flex items-center gap-2 disabled:opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiSave className="w-5 h-5" />
              {saving ? 'Saving...' : 'Save All Changes'}
            </motion.button>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-700">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 flex items-center gap-2 rounded-t-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-slate-900 text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Personal Info Tab */}
        {activeTab === 'personal' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-6">
            <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  value={data.personal.name}
                  onChange={(e) => updatePersonal('name', e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Title</label>
                <input
                  type="text"
                  value={data.personal.title}
                  onChange={(e) => updatePersonal('title', e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-2">Bio</label>
                <textarea
                  value={data.personal.bio}
                  onChange={(e) => updatePersonal('bio', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  value={data.personal.email}
                  onChange={(e) => updatePersonal('email', e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Phone</label>
                <input
                  type="text"
                  value={data.personal.phone}
                  onChange={(e) => updatePersonal('phone', e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Location</label>
                <input
                  type="text"
                  value={data.personal.location}
                  onChange={(e) => updatePersonal('location', e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold mb-4">Social Links</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">GitHub</label>
                  <input
                    type="url"
                    value={data.social.github}
                    onChange={(e) => updateSocial('github', e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">LinkedIn</label>
                  <input
                    type="url"
                    value={data.social.linkedin}
                    onChange={(e) => updateSocial('linkedin', e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Experience</h2>
              <button
                onClick={addExperience}
                className="px-4 py-2 bg-slate-900 text-white rounded-lg flex items-center gap-2"
              >
                <FiPlus className="w-4 h-4" />
                Add Experience
              </button>
            </div>
            <div className="space-y-4">
              {data.experience.map((exp) => (
                <div
                  key={exp.id}
                  className="border rounded-lg p-4 dark:border-gray-700"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Company</label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                        className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Position</label>
                      <input
                        type="text"
                        value={exp.position}
                        onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                        className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Period</label>
                      <input
                        type="text"
                        value={exp.period}
                        onChange={(e) => updateExperience(exp.id, 'period', e.target.value)}
                        className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Type</label>
                      <select
                        value={exp.type}
                        onChange={(e) => updateExperience(exp.id, 'type', e.target.value)}
                        className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                      >
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Internship">Internship</option>
                        <option value="Apprenticeship">Apprenticeship</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold mb-2">Description</label>
                      <textarea
                        value={exp.description}
                        onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold mb-2">Responsibilities (one per line)</label>
                      <textarea
                        value={Array.isArray(exp.responsibilities) ? exp.responsibilities.join('\n') : ''}
                        onChange={(e) => updateExperience(exp.id, 'responsibilities', e.target.value.split('\n').filter(r => r.trim()))}
                        rows={4}
                        className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                        placeholder="Responsibility 1&#10;Responsibility 2&#10;Responsibility 3"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => deleteExperience(exp.id)}
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg flex items-center gap-2"
                  >
                    <FiTrash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education Tab */}
        {activeTab === 'education' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Education</h2>
              <button
                onClick={addEducation}
                className="px-4 py-2 bg-slate-900 text-white rounded-lg flex items-center gap-2"
              >
                <FiPlus className="w-4 h-4" />
                Add Education
              </button>
            </div>
            <div className="space-y-4">
              {data.education.map((edu) => (
                <div
                  key={edu.id}
                  className="border rounded-lg p-4 dark:border-gray-700"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Degree</label>
                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                        className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Institution</label>
                      <input
                        type="text"
                        value={edu.institution}
                        onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                        className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Type</label>
                      <select
                        value={edu.type}
                        onChange={(e) => updateEducation(edu.id, 'type', e.target.value)}
                        className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                      >
                        <option value="University">University</option>
                        <option value="Diploma">Diploma</option>
                        <option value="Certificate">Certificate</option>
                      </select>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteEducation(edu.id)}
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg flex items-center gap-2"
                  >
                    <FiTrash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Tab */}
        {activeTab === 'skills' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Skills</h2>
              <button
                onClick={addSkill}
                className="px-4 py-2 bg-slate-900 text-white rounded-lg flex items-center gap-2"
              >
                <FiPlus className="w-4 h-4" />
                Add Skill
              </button>
            </div>
            <div className="space-y-4">
              {data.skills.map((skill) => (
                <div
                  key={skill.id}
                  className="border rounded-lg p-4 dark:border-gray-700"
                >
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Skill Name</label>
                      <input
                        type="text"
                        value={skill.name}
                        onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                        className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Level (%)</label>
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={skill.level}
                        onChange={(e) => updateSkill(skill.id, 'level', parseInt(e.target.value))}
                        className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Icon</label>
                      <input
                        type="text"
                        value={skill.iconName}
                        onChange={(e) => updateSkill(skill.id, 'iconName', e.target.value)}
                        placeholder="html, java, react, etc."
                        className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => deleteSkill(skill.id)}
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg flex items-center gap-2"
                  >
                    <FiTrash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Projects</h2>
              <button
                onClick={addProject}
                className="px-4 py-2 bg-slate-900 text-white rounded-lg flex items-center gap-2"
              >
                <FiPlus className="w-4 h-4" />
                Add Project
              </button>
            </div>
            <div className="space-y-4">
              {data.projects.map((project) => (
                <div
                  key={project.id}
                  className="border rounded-lg p-4 dark:border-gray-700"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Title</label>
                      <input
                        type="text"
                        value={project.title}
                        onChange={(e) => updateProject(project.id, 'title', e.target.value)}
                        className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Company</label>
                      <input
                        type="text"
                        value={project.company}
                        onChange={(e) => updateProject(project.id, 'company', e.target.value)}
                        className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold mb-2">Description</label>
                      <textarea
                        value={project.description}
                        onChange={(e) => updateProject(project.id, 'description', e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Image (Emoji)</label>
                      <input
                        type="text"
                        value={project.image}
                        onChange={(e) => updateProject(project.id, 'image', e.target.value)}
                        placeholder="🏦"
                        className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Tags (comma separated)</label>
                      <input
                        type="text"
                        value={Array.isArray(project.tags) ? project.tags.join(', ') : project.tags}
                        onChange={(e) => updateProject(project.id, 'tags', e.target.value.split(',').map(t => t.trim()))}
                        placeholder="React, Node.js, MongoDB"
                        className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={project.featured}
                          onChange={(e) => updateProject(project.id, 'featured', e.target.checked)}
                          className="w-4 h-4"
                        />
                        <span className="text-sm font-semibold">Featured</span>
                      </label>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteProject(project.id)}
                    className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg flex items-center gap-2"
                  >
                    <FiTrash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

