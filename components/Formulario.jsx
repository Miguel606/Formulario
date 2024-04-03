'use client'
import { useState } from 'react';

export default function FormularioContacto() {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        redesSocialesSeleccionadas: [],
        presupuestoSeleccionado: '',
        influencer: '',
        redSocialEmpresa: '',
        telefono: '',
        ayuda: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Aquí puedes enviar los datos del formulario a tu API o hacer cualquier otra acción necesaria
            console.log('Datos del formulario:', formData);
            alert('Formulario enviado correctamente');

            // Limpia los datos del formulario después de enviarlos
            setFormData({
                nombre: '',
                correo: '',
                redesSocialesSeleccionadas: [],
                presupuestoSeleccionado: '',
                influencer: '',
                redSocialEmpresa: '',
                telefono: '',
                ayuda: ''
            });

        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    };

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? (checked ? [...prevState[name], value] : prevState[name].filter(item => item !== value)) : value
        }));
    };

    return (
        <div className='justify-center text-white flex flex-wrap'>
        <div>
        <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
        <h1 className="text-3xl font-bold mb-4">Formulario de Contacto</h1>
        <form action="#" method="POST" className="max-w-md">
        <div className="mb-4">
            <label for="nombre" className="block text-gray-700 font-bold mb-2">Nombre:</label>
            <input    id="Name" name="name" className="form-input w-full" />
        </div>
        <div className="mb-4">
            <label for="correo" className="block text-gray-700 font-bold mb-2">Correo electrónico:</label>
            <input  type="email" id="email" name="email" className="form-input w-full" />
        </div>
        <div className="mb-4">
            <label for="redesSociales" className="block text-gray-700 font-bold mb-2">Redes Sociales (URL):</label>
            <div className="flex flex-col gap-2">
            <label class="inline-flex items-center mb-2">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-purple-600 mr-2" value="$100"/>
                <span>youtube</span>
                </label>
                <label class="inline-flex items-center mb-2">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-purple-600 mr-2" value="$200"/>
                <span>twitter</span>
                </label>
                <label class="inline-flex items-center mb-2">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-purple-600 mr-2" value="$300"/>
                <span>Meta</span>
                </label>
                <label class="inline-flex items-center mb-2">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-purple-600 mr-2" value="$400"/>
                <span>Discord</span>
                </label>
            </div>
        </div>
        <div className="mb-4">
            <label for="presupuesto" className="block text-gray-700 font-bold mb-2">Presupuesto Estimado:</label>
            <div className="flex flex-col gap-2">
            <label class="inline-flex items-center mb-2">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-purple-600 mr-2" value="$100"/>
                <span>$100</span>
                </label>
                <label class="inline-flex items-center mb-2">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-purple-600 mr-2" value="$200"/>
                <span>$200</span>
                </label>
                <label class="inline-flex items-center mb-2">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-purple-600 mr-2" value="$300"/>
                <span>$300</span>
                </label>
                <label class="inline-flex items-center mb-2">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-purple-600 mr-2" value="$400"/>
                <span>$400</span>
                </label>
                <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-purple-600 mr-2" value="$500"/>
                <span>$500</span>
                </label>
            </div>
        </div>
        <div className="mb-4">
            <label for="influencer" className="block text-gray-700 font-bold mb-2">Influencer Específico:</label>
            <input type="text" id="influencer" name="influencer" className="form-input w-full" />
        </div>
        <div className="mb-4">
            <label for="redSocialEmpresa" className="block text-gray-700 font-bold mb-2">Red Social de la Empresa:</label>
            <input type="text" id="redesempresa" name="redesempresa" className="form-input w-full" />
        </div>
        <div className="mb-4">
            <label for="telefono" className="block text-gray-700 font-bold mb-2">Número Telefónico:</label>
            <input type="tel" id="telefono" name="telefono" className="form-input w-full" />
        </div>
        <div className="mb-4">
            <label for="ayuda" className="block text-gray-700 font-bold mb-2">¿Cómo podemos ayudarte?</label>
            <textarea id="ayuda" name="ayuda" rows="4" className="form-textarea w-full"></textarea>
        </div>
           
            <div className="mb-4">
                <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">Enviar</button>
            </div>
        </form>
    </div>
    <div className="flex justify-center items-center">
          <img src="../../logo.svg" alt="" />
          <h1>hellow</h1>
    </div>
</div>
        </div>
    </div>
    );
}