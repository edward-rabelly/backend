import { Request, Response, NextFunction } from 'express';
import { UsuarioModel } from '../models/usuario.model';
import bcrypt from 'bcryptjs'; // <-- 1. IMPORTAR BCRYPT

export const obtenerUsuarios = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const usuarios = await UsuarioModel.obtenerTodos();
    res.status(200).json(usuarios);
  } catch (error) {
    next(error);
  }
};

export const obtenerUsuarioPorId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const usuario = await UsuarioModel.obtenerPorId(id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(200).json(usuario);
  } catch (error) {
    next(error);
  }
};

export const crearUsuario = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // 2. Separamos la contraseña del resto de los datos
    const { contrasena, ...restoDeDatos } = req.body;

    // 3. Encriptamos la contraseña (10 es el estándar de seguridad)
    const salt = await bcrypt.genSalt(10);
    const contrasenaEncriptada = await bcrypt.hash(contrasena, salt);

    // 4. Armamos el objeto final con la contraseña ya encriptada
    const datosParaGuardar = {
      ...restoDeDatos,
      contrasena: contrasenaEncriptada
    };

    // 5. Se lo pasamos al Modelo para que lo guarde
    const nuevoUsuario = await UsuarioModel.crear(datosParaGuardar);

    // 6. (Recomendado) Quitamos la contraseña de la respuesta que se envía al frontend
    const { contrasena: _, ...usuarioSinPassword } = nuevoUsuario;

    res.status(201).json(usuarioSinPassword);
  } catch (error) {
    next(error);
  }
};

export const actualizarUsuario = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    
    // Si se está actualizando la contraseña, también deberíamos encriptarla
    if (req.body.contrasena) {
      const salt = await bcrypt.genSalt(10);
      req.body.contrasena = await bcrypt.hash(req.body.contrasena, salt);
    }

    const usuario = await UsuarioModel.actualizar(id, req.body);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    
    const { contrasena: _, ...usuarioSinPassword } = usuario;
    res.status(200).json(usuarioSinPassword);
  } catch (error) {
    next(error);
  }
};

export const eliminarUsuario = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const eliminado = await UsuarioModel.eliminar(id);
    if (!eliminado) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export const obtenerHistorialUsuario = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const historial = await UsuarioModel.obtenerHistorial(id);
    
    res.status(200).json(historial || []);
  } catch (error) {
    next(error);
  }
};

// tener algo conceptual a algo de codigo. No las ejecuta pero si las gestiona