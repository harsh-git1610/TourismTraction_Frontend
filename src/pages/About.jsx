import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Users, Leaf, Award, Globe, Heart, Shield, Lightbulb } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const values = [
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Committed to eco-friendly tourism practices that protect and preserve natural resources.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Heart,
      title: 'Community First',
      description: 'Supporting local communities through authentic cultural experiences and economic opportunities.',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: Shield,
      title: 'Conservation',
      description: 'Protecting wildlife and natural habitats through responsible tourism and conservation efforts.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Globe,
      title: 'Digital Innovation',
      description: 'Leveraging technology to create smart, accessible, and personalized tourism experiences.',
      color: 'from-purple-500 to-violet-600'
    }
  ]

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Project Lead & Full-Stack Developer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Computer Science student passionate about sustainable technology and digital innovation for social impact.',
      specialties: ['React Development', 'UI/UX Design', 'Project Management']
    },
    {
      name: 'Priya Sharma',
      role: 'Research & Content Strategist',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Tourism Management student with deep interest in Jharkhand\'s cultural heritage and tribal communities.',
      specialties: ['Content Research', 'Cultural Studies', 'Tourism Planning']
    },
    {
      name: 'Arjun Singh',
      role: 'AI/ML Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Data Science enthusiast working on intelligent recommendation systems and personalization algorithms.',
      specialties: ['Machine Learning', 'Data Analysis', 'Algorithm Design']
    },
    {
      name: 'Maya Devi',
      role: 'Environmental Science Advisor',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Environmental Science student focused on sustainable tourism practices and conservation awareness.',
      specialties: ['Sustainability Research', 'Eco-tourism', 'Environmental Impact']
    }
  ]

  const projectGoals = [
    { number: '50+', label: 'Destinations to Cover', icon: Target },
    { number: '10+', label: 'Tribal Communities', icon: Users },
    { number: '100%', label: 'Sustainable Focus', icon: Leaf },
    { number: '24/7', label: 'Smart Support', icon: Award }
  ]

  const projectRoadmap = [
    {
      phase: 'Phase 1',
      title: 'Platform Development',
      description: 'Building the core digital platform with modern web technologies and responsive design.',
      status: 'Completed'
    },
    {
      phase: 'Phase 2',
      title: 'AI Integration',
      description: 'Implementing smart trip planning with AI-powered recommendations and personalization.',
      status: 'In Progress'
    },
    {
      phase: 'Phase 3',
      title: 'Community Partnerships',
      description: 'Establishing authentic partnerships with tribal communities for cultural experiences.',
      status: 'Planned'
    },
    {
      phase: 'Phase 4',
      title: 'Mobile App Launch',
      description: 'Developing mobile applications for iOS and Android platforms.',
      status: 'Planned'
    },
    {
      phase: 'Phase 5',
      title: 'IoT & AR Features',
      description: 'Integrating IoT sensors and AR experiences for immersive tourism.',
      status: 'Future'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 pt-20"
    >
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8">
              <Lightbulb className="h-4 w-4" />
              <span className="text-sm font-medium">Our Vision</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-bold mb-6 leading-tight">
              About Our
              <span className="block gradient-text bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                Mission
              </span>
            </h1>
            
            <p className="text-2xl lg:text-3xl font-light max-w-4xl mx-auto leading-relaxed">
              Revolutionizing Jharkhand tourism through sustainable practices, 
              cultural preservation, and cutting-edge technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-32" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <p className="text-2xl text-slate-600 max-w-5xl mx-auto font-light leading-relaxed">
              To create a sustainable digital ecosystem that promotes Jharkhand's natural beauty 
              and cultural heritage while empowering local communities and preserving the environment 
              for future generations.
            </p>
          </motion.div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Goals */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">Project Goals & Vision</h3>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
              Our ambitious targets for transforming Jharkhand's tourism landscape
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {projectGoals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4">
                  <goal.icon className="h-8 w-8 text-white mx-auto mb-3" />
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {goal.number}
                  </div>
                  <div className="text-white/90 font-medium">
                    {goal.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Meet Our <span className="gradient-text">Development Team</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Passionate students and developers working together to revolutionize Jharkhand tourism
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 1.3 + index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-primary-600 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Development Roadmap */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 1.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Development <span className="gradient-text">Roadmap</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our strategic plan for building the ultimate eco-tourism platform
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 to-accent-600 rounded-full"></div>
              
              <div className="space-y-12">
                {projectRoadmap.map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 1.7 + index * 0.2 }}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      <div className="bg-white rounded-2xl shadow-lg p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="text-2xl font-bold text-primary-600">{phase.phase}</div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            phase.status === 'Completed' ? 'bg-green-100 text-green-800' :
                            phase.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                            phase.status === 'Planned' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {phase.status}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{phase.description}</p>
                      </div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className={`w-4 h-4 rounded-full border-4 border-white shadow-lg ${
                        phase.status === 'Completed' ? 'bg-green-500' :
                        phase.status === 'In Progress' ? 'bg-blue-500' :
                        'bg-gray-400'
                      }`}></div>
                    </div>
                    
                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl font-light mb-8 max-w-3xl mx-auto">
              Be part of the sustainable tourism revolution in Jharkhand. 
              Together, we can preserve nature and culture for future generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary text-lg">
                Partner With Us
              </button>
              <button className="btn-outline text-lg">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default About
