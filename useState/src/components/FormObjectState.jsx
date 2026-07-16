import { useState } from 'react'

function FormObjectState() {
  const [profile, setProfile] = useState({
    name: '',
    role: '',
    bio: '',
  })

  const handleProfileChange = (event) => {
    const { name, value } = event.target
    setProfile((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <article className="card wide">
      <h2>3) Form Object State</h2>
      <p>
        Use one object state for related form fields. Spread previous state to
        update one field at a time.
      </p>
      <div className="formGrid">
        <label>
          Name
          <input
            name="name"
            value={profile.name}
            onChange={handleProfileChange}
            placeholder="Aisha"
          />
        </label>
        <label>
          Role
          <input
            name="role"
            value={profile.role}
            onChange={handleProfileChange}
            placeholder="Frontend Engineer"
          />
        </label>
        <label className="span2">
          Bio
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleProfileChange}
            rows="3"
            placeholder="I enjoy shipping user-friendly interfaces."
          />
        </label>
      </div>
      <div className="preview">
        <h3>Live Preview</h3>
        <p>
          {profile.name || 'Your name'} - {profile.role || 'Your role'}
        </p>
        <p>{profile.bio || 'Your short bio appears here.'}</p>
      </div>
    </article>
  )
}

export default FormObjectState
