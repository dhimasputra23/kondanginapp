<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;


class RegistrationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string',
            'email' => 'required|email',
            'password' => 'required|string|min:6|max:25',
            'no_hp' => 'required|string|min:10|max:12',
            'alamat' => 'required|string|min:5',
            'kota' => 'required|string|min:4',
            'provinsi' => 'required|string|min:4',
        ];
    }

    public function getAttributes(){
        return $this->validated();
    }
}
